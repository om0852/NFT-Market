import React, { useState, useEffect, useContext } from "react"
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { Router } from "next/router";
import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";
import axios from "axios";
import { creare as ipfsHttpClient } from "ipfs-http-client"


const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")
//fetch contract

// const web3Modal = new Web3Modal({
//     cacheProvider: true,
//     providerOptions
//   });
const fetchContract = async (signerOrProvider) => {
    if (!signerOrProvider) {
        throw new Error('fetchContract: signerOrProvider is undefined');
    }

    return new ethers.Contract(
        NFTMarketplaceAddress,
        NFTMarketplaceABI,
        signerOrProvider         // Signer for writes, Provider for reads
    );
}

//connecting with smart contract 
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = await provider.getSigner();
        const contract = await fetchContract(signer);
        return contract;
    } catch (error) {
        console.log("Something went wrong while connecting with contract", error)
    }
}

const checkContract = async () => {
    const contract = await connectingWithSmartContract();
    console.log(contract)
}

//connect wallet


const connectWallet = async () => {
    try {
        const contract = await connectingWithSmartContract();
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
            setCurrentAccount[accounts[0]]
            window.location.reload();
        }
        else {
            console.log("No Account Found")
        }
    } catch (error) {

    }
}

const uploadToIPFS = async (file) => {
    try {
        const added = await client.add({ content: file });
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        return url
    } catch (error) {
        console.log("Something went wrong while uploading to IPFS", error)
    }
}

export const NFTMarketplaceContext = React.createContext();
export const NFTMarketplaceProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const checkIfWalletConnect = async () => {
        try {
            if (!window.ethereum) {
                return console.log("Install metamask")
            }
            const accounts = await window.ethereum.request({ method: "eth_accounts" })
            if (accounts.length > 0) {
                setCurrentAccount[accounts[0]]
                window.location.reload();
            }
            else {
                console.log("No Account Found")
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkIfWalletConnect();
    }, [])


    const createNFT = async (formInput, fileUrl, router) => {
        try {
            const { name, description, price } = formInput;
            if (!name || !description || !price || !fileUrl) return;
            const data = JSON.stringify({ name, description, image: fileUrl });
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            await createSale(url, price)
        } catch (error) {
            console.log(error.message)
        }
    }

    const createSale = async(url,formInputPrice,isReselling,id)=>{
        try {
            const price = ethers.utils.parseEther(formInputPrice);
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling ? await contract.createToken(url, price, {
                value: listingPrice.toString(),
            }) : await contract.resellToken(id, price, {
                value: listingPrice.toString(),
            });
            await transaction.wait();
            // router.push('/');
            
        } catch (error) {
            console.log(error.message)
        }
    }
    // const fetch
    return (

        <NFTMarketplaceContext.Provider value={{ uploadToIPFS, checkContract, connectWallet, checkIfWalletConnect, createNFT}}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
}











// const NFTMarketplaceContext = ()=>{
// return(
// <>
// </>
// )

// }

// export default NFTMarketplaceContext