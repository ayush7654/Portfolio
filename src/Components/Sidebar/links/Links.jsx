import React from 'react'
import { motion } from 'framer-motion';

const variants={
    open:{
        transition:{
            staggerChildren:0.2
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        },
    },
};
const itemVariants={
    open:{
       y:0,
       opacity:1,
    },
    closed:{
       y:50,
       opacity:0,
    },
};
export default function Links() {
    const items=[
        "Homepage",
        "Skills",
        "Projects"

    ]

  return (
    <motion.div className='links' variants={variants}>
        {items.map(item=>(
            <motion.a className='sidebar-nav'  href={`#${item}`} 
            key={item} 
            variants={itemVariants}
            whileHover={{scale:1.1}}
            whileTap={{scale:.95}}

            >{item}</motion.a>))}
        </motion.div>
  )
}
