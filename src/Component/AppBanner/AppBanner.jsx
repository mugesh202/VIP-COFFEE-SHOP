import React from 'react'
// import React from "react";
import appbannerimg from "../../assets/website/banner.jpg"
import appstoreimg from "../../assets/website/app_store.png"
import playstoreimg from "../../assets/website/play_store.png"
import { motion } from "framer-motion";
export default function AppBanner() {
    const BannerStyle = {
    backgroundImage: `url(${appbannerimg})`,
    backgroundSise: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height:"100%",
    width:"100%"

};
  return (
     <div className="container my-14">
    <div style={BannerStyle} className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
    <div >
      <div className='space-y-6 max-w-xl mx-auto'>
        <motion.h1 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.2
         }}
        className='text-3xl sm:text-4xl text-center font-semibold'>Download The App</motion.h1>

        <motion.p 
         initial={{opacity:0,y:-100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.4
         }}
        className='text-center sm:px-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptas.</motion.p>
      <motion.div 
       initial={{opacity:0,y:-100}}
       whileInView={{opacity:1, y:0}}
       transition={{
           type:"spring",
           stiffness:100,
           damping:10,
           delay:0.6
       }}
      className='flex items-center justify-center gap-4'>
        <a href="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
          <img src={appstoreimg} alt="" />
        </a>
        <a href="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
          <img src={playstoreimg} alt="" />
        </a>
      </motion.div>
      </div>
    </div>
    </div>
  </div>
  )
}




