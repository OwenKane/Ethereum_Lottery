const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const  { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    //Dummy wallet
    'grab south skirt again bird text ask stay around ribbon mandate saddle',
    'https://rinkeby.infura.io/2jyiuMt1W9jiQa7b3y0w'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempt to deploy from: ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi, new test'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to: ', result.options.address);
};
deploy();