var myModule = artifacts.require("MyContract.sol");
module.exports = function (deployer) {
  deployer.deploy(myModule);
};
