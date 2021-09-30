var bip39 = require("bip39")
const bcoin = require('bcoin');
const mnemonic = bip39.generateMnemonic()
console.log("mnemonic : ",mnemonic)
const m = bcoin.Mnemonic.fromPhrase(mnemonic);
const master = bcoin.HDPrivateKey.fromMnemonic(m);
const key0 = master.derivePath("m'/44'/0'/0'/0/0");
const ring0 = new bcoin.KeyRing({privateKey: key0})
console.log("publicKey:",ring0["publicKey"].toString('hex'))
console.log("privateKey:",ring0["privateKey"].toString('hex'))
console.log(ring0)




