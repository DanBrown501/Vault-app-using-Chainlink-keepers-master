const Vault = artifacts.require("Vault.sol")

contract("Vault", ([deployer]) => {
    let vaultContract

    beforeEach(async () => {
        vaultContract = await Vault.new(30)
    })

    describe("deposit 10 ether ", () => {

        beforeEach( async () => {
            await vaultContract.deposit({ from: deployer , value: "10000000000000000000"})
        })

        it("should have balance of 10 ether", async() => {
            const balanceOfContract = await vaultContract.balanceOfContract()
            const tenEtherInWei = (10000000000000000000).toString()
            assert(balanceOfContract.toString() == tenEtherInWei)
            console.log("balance of contract in ether = ", parseInt(balanceOfContract.toString()) / 1e18)
        })

        it("should have interaval of 30 seconds ", async () => {
            const interval = await vaultContract.interval()
            assert(interval.toString() == (30).toString())
            console.log("seconds to run upkeep = ", interval.toString())
        })

    })  
})