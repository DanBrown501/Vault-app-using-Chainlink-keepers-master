import logo from './logo.png';
import './App.css';
import Web3 from 'web3';
import Vault from './abis/Vault.json'
import React, { useState, useEffect } from 'react';

function App() {

  const [web3, setWeb3] = useState(null)
  const[vaultContract,  setVaultContract] = useState(null);
  const[balanceInContract,  setBalanceInContract] = useState(null);
  const[amount,  setAmount] = useState(null);

  useEffect( async () => {
    loadBlockchainData()
  }, []);

  async function loadBlockchainData() {

      //Loads web3 for metamask wallet
    const web3 = new Web3(window.ethereum);
    setWeb3(web3)

    const networkId = await web3.eth.net.getId()

    //gets contract Address and prints
    const vaultContract = new web3.eth.Contract(Vault.abi, Vault.networks[networkId].address)
    console.log("address of deployed contract - ", Vault.networks[networkId].address)

    setVaultContract(vaultContract)

    //calls balance and sets the balance
    let vaultContractBalance = await vaultContract.methods.balanceOfContract().call()
    setBalanceInContract(vaultContractBalance / 1e18)
  }

  async function deposit () {
    // call deposit function
    await vaultContract.methods.deposit().send({ from: '0x629Da69DbdC0bbf5318cEd5C66D415586c0EeF92',  value: amount.toString() })

    // check balance
    let vaultContractBalance = await vaultContract.methods.balanceOfContract().call()
  }

  function amountChanged(e) {
    setAmount(e.target.value * 1e18)
  }

  return (
    <div className='center'>
      <h1>Vault app</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <br/>
      <input type="text" placeholder='Amount in ether' onChange={amountChanged}/>
      <br/>   
      <button onClick={deposit}>Deposit</button>
      <br/>   
      <span>Balance in Contract :</span> <h3>{balanceInContract} ether</h3>        
    </div>
  );
}

export default App;
