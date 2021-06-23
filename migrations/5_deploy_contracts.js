const SousChef = artifacts.require("SousChef");

module.exports = function (deployer) {
  deployer.deploy(SousChef, '0x81e7c9c0BD04A4257fD40D91Bb0fE2930dFcA4B4', '1000000000000000000', 0, 604800);
};
