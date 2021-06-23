const MasterChef = artifacts.require("MasterChef");

module.exports = function (deployer) {
  deployer.deploy(MasterChef, '0xC420f5DdE86D5b84761C7113A80E3b1784bA239C', '0x81e7c9c0BD04A4257fD40D91Bb0fE2930dFcA4B4', '0x010Ba66bA910e669A2A38fd9cBd82f78e5ef4418', 1000000000000000, 0);
};
