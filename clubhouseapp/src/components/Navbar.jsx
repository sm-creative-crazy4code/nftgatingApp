import React from 'react'



const LinksRoutes=[
    {namer:"Home",
    route:"/Home"
     },
     {namer:"live stream",
      route:"/Home"
     },
     {namer:"Videos",
    route:"/Videps"
     },{namer:"My nfts",
       route:"Mynfts",
      }

]


const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">NFTflix</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
       {LinksRoutes.map((link)=>(<a className="mr-5 hover:text-white">{link.namer}</a>))}
   </nav>
    <button className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Button
      Connect wallet 
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar
