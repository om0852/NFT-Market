
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {

    // Contracts are deployed using the first signer/account by default

    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftmarketplace = await NFTMarketplace.deploy();

    await nftmarketplace.deployed();
    console.log("Deplyed smartcontract on address:",nftmarketplace.address);
  }

  deployOneYearLockFixture().catch((error)=>{
    console.log(error);
    process.exitCode=1;
  })
