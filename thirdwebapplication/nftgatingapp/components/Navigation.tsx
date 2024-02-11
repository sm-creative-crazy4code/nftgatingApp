import React from 'react'
import { ConnectWallet} from "@thirdweb-dev/react";
import {BiSearch} from "react-icons/bi"
import {BsBellFill} from "react-icons/bs"
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
    <a className="flex title-font font-medium items-center text-whitemb-4 md:mb-0">
     
      <span className="ml-3 text-xl">NFTflix</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <BiSearch className='w-6 h-6'/>
       {LinksRoutes.map((link)=>(<a className="mr-5 text-white  hover:text-blue-700  font-bold text-sm p-1">{link.namer}</a>))}
   </nav>
   <BsBellFill className="w-6 h-6"/>
   <div className=" flex justify-center items-center">
    <ConnectWallet/>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navigation
