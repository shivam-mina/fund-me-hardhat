const { getNamedAccounts, ethers } = require("hardhat")
async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding..")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("Got It back!!!")
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
