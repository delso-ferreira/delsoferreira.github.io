import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/aside.css';
import {
    FcHome,
    FcAbout,
    FcLinux,    
} from "react-icons/fc"

function Aside({ children }) {
    const[expand, setExpand] = useState(false)
    const button = () => setExpand(!expand);

    const menu = [
        {
            path: "/",
            text: "Home",
            icon: <FcHome />
        },
        {
            path: "/About",
            text: "About",
            icon: <FcAbout />
        },
        {
            path: "/Repo",
            text: "Projects",
            icon: <FcLinux />
        }
    ];

  return (
    <div className="container">
    <div style={{width: expand ? "200px" : "50px"}} className="container_sidebar">
        <div className="container_section"
             onClick={ button }   
        >
            <h1 style={{display: expand ? "block" : "none"}} 
                className="initial_icon"
                name="menu"                
            >
            Menu
            </h1>
            <div style={{marginLeft: expand ? "40px" : "0px"}} className="container_bars" />                            
        </div>
        {
            menu.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: expand ? "block" : "none"}} className="link_text">{item.text}</div>
                </NavLink>
            ))
        }
    </div>
    <main>{children}</main>
 </div>
  )
}

export default Aside;