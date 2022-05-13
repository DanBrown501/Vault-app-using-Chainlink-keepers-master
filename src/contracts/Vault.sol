pragma solidity ^0.8.2;
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

contract Vault is KeeperCompatibleInterface {
    address public owner; //Person who deploys and uses the contract

    constructor(uint updateInterval) {
        owner = msg.sender;
        interval = updateInterval; //specified in seconds
        lastTimeStamp = block.timestamp;
    }

    function deposit() external payable {}

    function balanceOfContract() external view returns(uint256) {
        return address(this).balance;
    }

    uint public immutable interval;
    uint public lastTimeStamp;

    function checkUpkeep(bytes calldata ) external override 
    returns(bool upkeedNeeded, bytes memory performData) {
        upkeedNeeded = (block.timestamp - lastTimeStamp) > interval; //If upkeep needed is greater than interval, return true. Upkeep needed is true
    }

    function performUpkeep(bytes calldata performData) external override {
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp; //Reset the timer for checkUpKeep
            payable(address(owner)).transfer(0.1 ether); //Pay out the specified amount
        }
    }
}