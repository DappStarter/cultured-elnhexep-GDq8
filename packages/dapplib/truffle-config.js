require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remain pulse hover drip fun skull'; 
let testAccounts = [
"0x88546e506b87750ee31dd9b8d58dfd3e71c933cb71ca2d68613a187e0d484532",
"0xe2a2f1aa5e3720772c84d4f4bd4a9a8cc3a0de782616f825dfdba202687265b8",
"0xce76932a1496fdab113855911694cca6a424d605f79b93c6f07f4cce63231494",
"0x0fa81e5fee88c8a028abd84b65b178320bf309ea743e4287a3083211b3ef522b",
"0xdd2c40c1657ab104db57197d1a757ac8d8971859547ab80b6e6f785c78c71fc7",
"0x7fcd1c42f9c627220499a309f16c261105a286049df3ae15b6b765749b9aa5bb",
"0xf276193f9b54edd45b9bc20f06a3de3aec327f9e43a8de4b52249feb98ec799c",
"0x235bcac1fbb90134a42e2e82acded3629b3f0a8592778d90d6eb356c7c43a04f",
"0x7c1967e0846824272fb6b02fda21fcd098a420f3a5b80ed9850204887ac457b8",
"0x9e1fca8980cdde0f2b230ff53a08113c9c9f3040121ff199d901a2c53330b621"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


