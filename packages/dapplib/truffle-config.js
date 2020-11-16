require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strike cruise muscle coin heavy enter metal gasp'; 
let testAccounts = [
"0x55f5e722c84c7030005a9dc456886f93e77db948638fae5c973738ae636d6c58",
"0x1e0b4fe890aeea47c5883cbca3053127b125ad59ce308b3f6d8c3d4c864c4203",
"0xdfba6696ee1006374c40b16a7ce8af790221eb107b1c658a7321746fb3976672",
"0xfcf124851dc7b6c58754f21a030b332d8b42f03ead52cb78cb88c9757086ec42",
"0xe6a6f13374259a4d93418094f651c58580f82921b47a18acc4be9d5fc924e369",
"0x24be74709e8a9964cba24f297fadc5e51187af9eda865bffef607a77dd38c7f2",
"0x36593dadee9be26362a02d3836e43f1ff1209c9d188211911a1f847d194c3728",
"0x46068887512b1350022c599fc51323ae454b0a462c19dad231efbe4f8612bb38",
"0x4cdfe95b49e1a309b5abff8a94088db5569ba2abe0445df99974497b66d3a7ea",
"0xf8d554c48b555db92e7754404ba55e3d3566d1dc1998c85da2ec398d01674d63"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
