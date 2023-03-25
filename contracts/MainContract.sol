pragma solidity >=0.8.2 <0.9.0;

contract MyContract {
    // Private state variable
    address private owner;

    constructor() public {
        owner = msg.sender;
    }

    // Function to get
    // address of owner
    function getOwner() public view returns (address) {
        return owner;
    }

    function getBalance() public view returns (uint256) {
        uint256 bal = owner.balance / 1 ether;
        return bal;
    }
    function sendBal(address payable receiver) payable external{
    uint256 amount = msg.value;
    receiver.transfer(amount);  
}
}
