const SmartChef = artifacts.require("SmartChef");

module.exports = function (deployer) {
  deployer.deploy(SmartChef, '0x9521C35D46a207C62b0BF883c7E6e75089633694', '0xC420f5DdE86D5b84761C7113A80E3b1784bA239C', '1000000000000000000', 0, 10958769);
};
