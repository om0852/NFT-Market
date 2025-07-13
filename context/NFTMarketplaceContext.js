import React, { useState, useEffect, useContext, createContext } from "react"
import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import { Router } from "next/router";
import { NFTMarketplaceABI, NFTMarketplaceAddress } from "./constants";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client"


const subdomain="https://ipfs.infura.io"
const projectId="3dad29cb57ab4fd997107e6e1b00cdd6"
const projectSecretKey="oxNMXJEzpUqd4vxZ4ZHY2BS4u2uaLd51U8aQSvUHoMfx79e+IUybEQ";
const gatewaykey="RSru_pWWiA9xFuOzgBm745In1YlPq1WNZVIUkAocoU4pKDFmvAieaGhBLegoDJE-"
const accesstoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwOTViMTg0YS03ZjgxLTRjODItODRlYS1jYzA1YmJjNmE3NTMiLCJlbWFpbCI6InNhbHVua2VvbTQ3NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWFhYjQ2ODk5NjU1ZTMwMmNkYTgiLCJzY29wZWRLZXlTZWNyZXQiOiI3YTU2MGExMTczODY4MTg0NTZhYzA5YzU3MmVlYWExZTU2NDA0ZDkzMmNjZjdhMmFhODQ0MDE0OWQ0ZGMzMzkxIiwiZXhwIjoxNzgzOTI0MTEwfQ.b99Z-akwjYPkZwFt5nw3ALZMSTEQ9jnMK_a79fCzKeY"
const auth =  `Basic${Buffer.from(`${projectId}:${projectSecretKey}`).toString("base64")}`
const client = ipfsHttpClient({
    host:subdomain,
    port:5001,
    protocol:"https",
    headers:{
        authorization:auth
    }
})
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
            // window.location.reload();
        }
        else {
            console.log("No Account Found")
        }
    } catch (error) {

    }
}

export const uploadToIPFS = async (file) => {
    try {
        const added = await client.add({ content: file });
        const url = `${subdomain}/ipfs/${added.path}`
        return url
    } catch (error) {
        console.log("Something went wrong while uploading to IPFS", error)
    }
}

export const NFTMarketplaceContext = createContext();
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
                // window.location.reload();
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

    const fetchNFTs = async()=>{
        try {
            const provider =  new ethers.providers.JsonRpcProvider();
            const contract = await connectingWithSmartContract(provider);
            const data = await contract.fetchMarketItems();
            const items = await Promise.all(data.map(async i => {
                const tokenUri = await contract.tokenURI(i.tokenId);
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    description: meta.data.description,
                }
                return item;
            }))
            return items;
        } catch (error) {
            console.log(error.message)
        }
    }


    const fetchMyNFTsOrListedNFTs =async(type)=>{
        try {
            const provider =  new ethers.providers.JsonRpcProvider();
            const contract = await connectingWithSmartContract(provider);
            const data = type=="fetchItemsListed"?await contract.fetchItemsListed():await contract.fetchMyNFTs();
            const items = await Promise.all(data.map(async i => {
                const tokenUri = await contract.tokenURI(i.tokenId);
                const meta = await axios.get(tokenUri);
                let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
                let item = {
                    price,
                    tokenId: i.tokenId.toNumber(),
                    seller: i.seller,
                    owner: i.owner,
                    image: meta.data.image,
                    name: meta.data.name,
                    description: meta.data.description,
                }
                return item;
            }))
            return items;
        } catch (error) {
            console.log(error.message)
        }
    }

    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseEther(nft.price.toString());
            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price,
            });
            await transaction.wait();
        } catch (error) {
            console.log(error.message)
        }
    }

    return (

        <NFTMarketplaceContext.Provider value={{ uploadToIPFS, checkContract, connectWallet, checkIfWalletConnect, createNFT,fetchNFTs,fetchMyNFTsOrListedNFTs,buyNFT,currentAccount}}>
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