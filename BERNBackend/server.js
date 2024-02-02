const express= require('express');
const cors= require('cors');
const {Web3}=require('web3')
const ABI = require('./Abi.json')

const PORT=8000;
const app = express();
app.use(cors)

app.listen(PORT,()=>{
    console.log("listening on port 8000");
});