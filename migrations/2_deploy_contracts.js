const CakeToken = artifacts.require("CakeToken");
const NewCoin = artifacts.require("NewCoin");

module.exports = function (deployer) {
  deployer.deploy(CakeToken);
  deployer.deploy(NewCoin);
};
