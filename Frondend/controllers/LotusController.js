import { HttpJsonRpcConnector, LotusClient, MnemonicWalletProvider} from 'filecoin.js';

export const ChainHead = async (req,res)=>{
    const connector = new HttpJsonRpcConnector({url:process.env.LOTUS_URL,token: process.env.LOTUS_TOKEN});
  
    const lotusClient = new LotusClient(connector);

    const net = await lotusClient.chain.getHead();
    // console.log(version);
    res.json(net)
    console.log(net)
  
}

export const GetHeight = async (req,res)=>{
  const connector = new HttpJsonRpcConnector({url:process.env.LOTUS_URL,token: process.env.LOTUS_TOKEN});
  
    const lotusClient = new LotusClient(connector);

    const net = await lotusClient.chain.getHead();
    // console.log(version);
    res.json(net["Height"])
    console.log(net["Height"])
}

export const ChainBlock =  async (req,res)=>{
    const connector = new HttpJsonRpcConnector({url:process.env.LOTUS_URL,token: process.env.LOTUS_TOKEN});
  
    const lotusClient = new LotusClient(connector);

    const net = await lotusClient.chain.getBlock({
      "/": "bafy2bzacechjsp2cybz4fpodwuksr6pociguovqswtlhujvzmjtcoph4ho5tw"
    });
    // console.log(version);
    res.json(net)
    console.log(net)
  
}



export const Wallet = async (req,res)=>{
    const connector = new HttpJsonRpcConnector({url:process.env.LOTUS_URL,token: process.env.LOTUS_TOKEN});
  
    const lotusClient =  new LotusClient(connector);
  const hdWalletMnemonic = 'xavier';
  const hdDerivationPath = `m/44'/461'/0'/0/0`;

  const walletProvider = new MnemonicWalletProvider(
    lotusClient,
    hdWalletMnemonic,
    hdDerivationPath
  );

  const myAddress = await walletProvider.getDefaultAddress();
  console.log(myAddress);
  res.json(myAddress)
  
}

export const WalletBalance = async (req,res)=>{
    const connector = new HttpJsonRpcConnector({url:'https://api.node.glif.io'});
  
    const lotusClient =  new LotusClient(connector);
  const hdWalletMnemonic = 'xavier';
  const hdDerivationPath = `m/44'/461'/0'/0/0`;

  const walletProvider = new MnemonicWalletProvider(
    lotusClient,
    hdWalletMnemonic,
    hdDerivationPath
  );

  const myAddress = await walletProvider.getDefaultAddress();
  console.log(myAddress);
  res.json(myAddress)
  
}