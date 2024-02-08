import React from 'react'
import { ConnectWallet} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
const LinksRoutes=[
    
     {namer:"live stream",
      route:"/Home"
     },
     {namer:"Videos",
    route:"/Videos"
     },
    ]


const Navigation = () => {
  return (
    <div className= 'w-full p-0'>
      <header className="text-gray-400 bg-gray-900 body-font w-full">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">NFTflix</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
       {LinksRoutes.map((link)=>(<a className="mr-5 text-white font-bold text-sm p-1">{link.namer}</a>))}
   </nav>
    <ConnectWallet/>
  </div>
</header>
    </div>
  )
}

export default Navigation
