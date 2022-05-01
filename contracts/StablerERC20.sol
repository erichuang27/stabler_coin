// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

interface TetherToken {
    function transfer(address dst, uint wad) external returns (bool);
    function transferFrom(address src, address dst, uint wad) external returns (bool);
    function balanceOf(address guy) external view returns (uint);
}

contract StablerERC20Contract is ERC20PresetMinterPauser{
    address owner;
    TetherToken public tetherToken;
      constructor() ERC20PresetMinterPauser("Stabler", "STB") {
            tetherToken = TetherToken(0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643);//testnet tether address
            owner = msg.sender;
    }   
    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    function safeMint(address to, uint amount) public payable{
      //  tetherToken.transferFrom(msg.sender, address(this), amount);
        require(msg.value == amount, "payment must be equal to amount of tokens you are getting"); 
        _mint(to, amount);
    }

      function withdraw() public payable onlyOwner {
    
    // This will payout the owner 95% of the contract balance.
    // Do not remove this otherwise you will not be able to withdraw the funds.
    // =============================================================================
    (bool os, ) = payable(owner).call{value: address(this).balance}("");
    require(os);
    // =============================================================================
  }
}