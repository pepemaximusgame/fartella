import React from 'react'
import logo from '/images/logo.png';
import dexLogo from '/images/DexLogo.png';
import teleLogo from '/images/teleLogo.png';
import xLogo from '/images/xLogo.png';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 px-0">
    <div className=" mx-auto text-center flex flex-row justify-between items-center">
    <div>
         <img className='h-10 w-12' src={logo} alt="Logo" />
      </div>

      <div>
      <p className="text-[8px] py-2">
        CA-2oPgfXLxXCUVWras3wawUp69MHowCtYbW2YQcwvmpump
      </p>
      <p className="text-sm ">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      </div>
      

     

      <div className="mt-2 mr-6">
                     <div className="social-icon-footer ">
                       <a href="https://pump.fun/coin/2oPgfXLxXCUVWras3wawUp69MHowCtYbW2YQcwvmpump"><img src={dexLogo} alt="xfartass" /></a>
                       <a href="https://x.com/fartass_coin"><img src={xLogo} alt="tfartass" /></a>
                       {/* <a href="https://t.me/fredfishgame"><img src={teleLogo} alt="" /></a> */}
                     </div>
      </div>
      {/* <p className="text-sm py-2">
        &copy; {new Date().getFullYear()} Fred The Fish. All Rights Reserved.
      </p> */}
    </div>
  </footer>
  )
}

export default Footer