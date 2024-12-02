import React from 'react'
import { FaGithub,FaTwitter,FaLinkedin,FaWhatsapp } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import creditcard from "../../assets/website/credit-cards.webp"
import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <motion.div 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.2
         }} className='space-y-6'>
          <h1 className='text-3xl uppercase font-bold'>VIP - Coffee Shop</h1>
          <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae repellat molestiae, odit veritatis consectetur.</p>
        <motion.div  initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.4
         }}>
          <p className='flex items-center gap-2 mt-2'>
            <FaWhatsapp />
            +91 97877 16553
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <FaMapLocation />
            India, TamilNadu
          </p>
        </motion.div>
        </motion.div>
        <motion.div 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.2
         }}
        className='space-y-6'>
        <h1 className='text-3xl font-bold text-center '>
        Quick Links
        </h1>
        <div className='grid gird-cols-2 gap-3 items-center justify-center'>
        <motion.div  initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.4
         }}>
          <ul className='space-y-3 '>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </motion.div>
        </div>
        </motion.div>
        <motion.div 
         initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.2
         }}className='space-y-6'>
          <h1 className='text-3xl font-bold '>Follow Us</h1>
          <div className='flex items-center gap-3 '>
          <FaGithub className='text-3xl hover:scale-105 duration-300' />
          <FaTwitter className='text-3xl hover:scale-105 duration-300' />
          <FaLinkedin className='text-3xl hover:scale-105 duration-300' />
          <FaWhatsapp className='text-3xl hover:scale-105 duration-300' />
          </div>
          <motion.div  initial={{opacity:0,y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.4
         }}>
            <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
            <img src={creditcard} alt="Wait..." className='w-[80%]' />
          </motion.div>
        </motion.div>
       
        </div>
        <motion.p 
         initial={{opacity:0,x:100}}
         whileInView={{opacity:1, x:0}}
         transition={{
             type:"spring",
             stiffness:100,
             damping:10,
             delay:0.2
         }}
        className='text-white text-center mt-8 pt-8 border-t-2'>
          A VIP - Coffee Shop Was One Of The Best Coffee Shop In The World.
        </motion.p>
      </div>
    </div>
  )
}

