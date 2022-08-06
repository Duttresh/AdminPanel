import React, { useState } from 'react'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/data'
import { FaBars, FaSignOutAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './sidebar.css'
const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    const [ expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true:{ left: '0' },
        false:{ left: '-60%' }

    }
  console.log(window.innerWidth)    
    return (
        <>
         <div className='bars' style={expanded?{left:'60%'}:{left:'5%'}}
         onClick={()=>setExpanded(!expanded)}
         >
            <FaBars/>
        </div>
        <motion.div className="Sidebar"
        variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''}>
        
            <div className="logo">
                <img src={Logo} alt='' />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            <div className='menu'>
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected===index?'menuItem active' : 'menuItem'} key={index} 
                        onClick={()=> setSelected(index)}>
                            <item.icon />
                            <span>{item.heading}</span>
                        </div>
                    )
                })}

                <div className='menuItem'>
                    <FaSignOutAlt />
                </div>

            </div>

        </motion.div>
        </>
    )
}

export default Sidebar