import React from 'react'
import world from "../../assets/world-map.png"
import { delay, motion } from 'framer-motion'
export default function WhereToBuy() {
  return (
    <div className='container my-36'>
        {/* <div className='items-center'>Book On Your Order</div> */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
            <div className='space-y-8'>
            <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.2}}
            className='text-4xl font-serif text-darkGray font-bold'>Buy our products from anywhere</motion.h1>
            <motion.div 
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1,y:0}}
             transition={{delay:0.4, type:"spring",
                stiffness:100,
                damping:10,}}
            className='flex items-center gap-4'>
                <input type="text" placeholder="Name" id="" className='w-full lg:w-[150px] input-style'/>
                <input type="email" placeholder="Email" id=""  className='w-full input-style'/>
            </motion.div>
            <motion.div 
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1,y:0}}
             transition={{delay:0.6, type:"spring",
                stiffness:100,
                damping:10, }}
             className='flex items-center gap-4'>
                <input type="text" placeholder="Country" id="" className='w-full input-style'/>
                <input type="text" placeholder="Zipcode" id=""  className='w-full lg:w-[150px]  input-style'/>
            </motion.div>
            <motion.button  initial={{opacity:0, y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{delay:0.8, type:"spring",
                stiffness:100,
                damping:10, }}
            className='primary-btn w-full'>Order Now</motion.button>
            </div>
            <div className='col-span-2'>
            <motion.img 
            initial={{opacity:0, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{delay:1, type:"spring",
                stiffness:100,
                damping:10, }}
            src={world} alt="" className='w-full sm:w-[500px] mx-auto'/>
            </div>
            </div>
            
          
        
        </div>
    
  )
}
