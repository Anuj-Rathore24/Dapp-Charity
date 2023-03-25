const express= require('express')
const app =express()
const Web3 = require('web3');
const abi=require("./build/contracts/MyContract.json").abi;
app.use(express.json())
if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  } else {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))
}


var myContract = new web3.eth.Contract(abi, '0xBa62AA9f97083D1aCeD1b4e32B32321e7857c2EA', {
    from: "0x61EC75252F6AE3BfC655B2284bd27cc5E0715E31", 
    gasPrice: '200000000' 
});


app.get("/getAllAccounts",async (req,res)=>{
    const accounts = await web3.eth.getAccounts()
    res.json(accounts);
})


app.get("/getCurrentAccount",async (req,res)=>{
    const owner = await myContract.methods.getOwner().call();
    // console.log(myContract.methods);
    const test = await myContract.methods.sendBal("0x31987c3712651D9eA0b02FEed39E43a455b319b6").call();
    res.json(owner);
})

app.listen(5000,()=>console.log(`Started on Port 5000`));