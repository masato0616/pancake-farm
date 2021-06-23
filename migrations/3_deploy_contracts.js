const SyrupBar = artifacts.require("SyrupBar");

module.exports = function (deployer) {
  deployer.deploy(SyrupBar, '0xC420f5DdE86D5b84761C7113A80E3b1784bA239C');
};
