import { GiHamburgerMenu } from "react-icons/gi"
import { motion } from "framer-motion"
export default function Navbar({sidebar,setSidebar}) {
  return (
    <nav className='absolute top-0 w-full left-0 pt-10 text-white z-40'>
        <div className='container'>
        <div className="flex items-center justify-between">
            <motion.h1 
            initial={{opacity:0,y:-100}}
            animate={{opacity:1, y:0}}
            transition={{
                type:"spring",
                stiffness:100,
                damping:10,
                delay:0.2
            }}className='text-2xl font-semibold uppercase'><span className='text-primary'>VIP</span> - Coffee Shop</motion.h1>
            <motion.div
             initial={{opacity:0,y:-100}}
             animate={{opacity:1, y:0}}
             transition={{
                 type:"spring",
                 stiffness:100,
                 damping:10,
                 delay:0.2
             }} onClick={()=>setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer"/>
            </motion.div>
        </div>
        </div>

    </nav>
  )
}
