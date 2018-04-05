//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
var TransportCenter = artifacts.require("TransportCenter.sol");
var TransportHeadquarter = artifacts.require("TransportHeadquarter");
//var TransportHeadquarter = artifacts.require("./TransportHeadquarter.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
  deployer.deploy(TransportHeadquarter);
};
