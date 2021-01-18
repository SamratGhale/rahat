// const CashAid = artifacts.require('CashAid');
// const TokenFactory = artifacts.require('TokenFactory');
const RahatAdmin = artifacts.require('RahatAdmin');

const AidToken = artifacts.require('AidToken');
const Rahat = artifacts.require('Rahat')

module.exports = function (deployer) {
  deployer.deploy(AidToken,'RAHAT','RTH','0x27a7189eC29637b916673e79B31429D7a67a13Bf').then(()=>{
    deployer.deploy(Rahat,AidToken.address,'0x27a7189eC29637b916673e79B31429D7a67a13Bf').then(()=>{
      deployer.deploy(RahatAdmin, AidToken.address, Rahat.address, 1000000);
    })

  })
};
