const AidToken = artifacts.require('AidToken'); 

module.exports = (deployer)=>{
  deployer.deploy(AidToken,'RAHAT', 'RHT','0x27a7189eC29637b916673e79B31429D7a67a13Bf');
};
