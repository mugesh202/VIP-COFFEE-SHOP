import React from 'react'
import { delay, easeInOut, motion } from 'framer-motion'
import Coffee1 from "../../assets/coffee/coffee1.png"
import Coffee3 from "../../assets/coffee/coffee3.png"
import { div } from 'framer-motion/client'
export default function Services() {
    const serviceData=[
        {
            id:1,
            image:Coffee1,
            title:"Black Coffee",
            subtitle:"It is a best one of the coffee,and then it was very use on refresh on your mind etc.."
        },
        {
            id:2,
            image:Coffee3,
            title:"Hot Coffee",
            subtitle:"It is a best one of the coffee,and then it was very use on refresh on your mind etc.."
        },
        {
            id:1,
            image:Coffee1,
            title:"cold Coffee",
            subtitle:"It is a best one of the coffee,and then it was very use on refresh on your mind etc.."
        },
    ];
    const cardVariants={
        hidden:{opacity:0, y:20},
        visible:{opacity:1, y:0},
        transition:{
            type:"spring",
            stiffness:150,
            damping:10,
            ease:"easeInOut"
        }
    };
    const containerVariants={
        hidden:{opacity:1},
        visible:{opacity:1},
        transition:{
           delay:0.6,
           staggerChildren:0.4
        }
    };
    
  return (
    <div className='container my-16 space-y-4'>
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1  
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1, y:0}}
            transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.2
            }}className='text-3xl font-bold text-lightGray'>Fresh and <span className='text-primary'>Tasty Coffee</span></motion.h1>
            <motion.p 
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{
            type:"spring",
            stiffness:150,
            damping:10,
            delay:0.4
            }}
            className='text-lightGray opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, modi earum soluta doloremque velit amet.</motion.p>
        </div>
        <div>
            <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{amount:0.8}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {serviceData.map((service)=>(
                    <motion.div 
                    variants={cardVariants}
                    className='text-center space-y-6 p-4'>
                        <img src={service.image} alt="" className='img-shadow2 max-w-[200px]
                        mx-auto hover:scale-110 duration-300 cursor-pointer'/>
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                            <p className='text-darkGray'>{service.subtitle}</p>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

    </div>
  )
}
