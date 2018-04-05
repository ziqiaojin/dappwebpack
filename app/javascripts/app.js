// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import headquarter_artifacts from '../../build/contracts/TransportHeadquarter.json'
import center_artifacts from '../../build/contracts/TransportCenter.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var TransportHeadquarter = contract(headquarter_artifacts);
var TransportCenter = contract(center_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// Foe application bootstrapping, check out window.addEventListener below.

var accounts;
var account;

App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  // Instance Web3
  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      // Only useful in a development environment
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:9545');
    }
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

 why: function() {
     TransportHeadquarter.deployed().then(function(instance) {
        pinstance = instance;
        pinstance.mintTransportCenter(11).then(function(f) {document.write(f);});
      });
  }
};
$(function() {
  $(window).load(function() {
    App.init();
    App.why();
  });
});
