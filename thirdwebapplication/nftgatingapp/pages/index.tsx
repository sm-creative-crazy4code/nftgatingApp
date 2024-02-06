import { ConnectWallet, ThirdwebSDK } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Thirdweb, { getUser } from "./api/auth/[...thirdweb]";
import { Sepolia } from "@thirdweb-dev/chains";
import checkbalance from "../utils/checkbalance";
const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        
              <h1>Intial login page</h1>
<ConnectWallet/>
        
            
         
      </div>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context:any){
  //user access check
  const user= await getUser(context.req);
  
  if(!user){
    return{
      redirect:{
        destination:"/login",
        permanant:false,
      }
    }
  }

  const secretKey= process.env.SECRET_KEY;
  if(!secretKey){
    throw new Error("No secret key specified")
  }

  //check if user holds nft
  const sdk=ThirdwebSDK.fromPrivateKey(
    process.env.SECRET_KEY as string,
    Sepolia,
    {secretKey:process.env.SECRET_KEY }

  );

  const tokenBalance= await checkbalance(sdk,user.address);

  if (tokenBalance.toNumber() ===0){
    return{
      redirect:{
        destination:"/mint",
        permanant:false,
      }
    }

  }

  return {
    props:{}
  }

};
