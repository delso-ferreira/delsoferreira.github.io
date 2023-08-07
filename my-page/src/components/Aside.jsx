import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/aside.css';
import {
    FcHome,
    FcAbout,
    FcLinux,
    FcMenu,    
} from "react-icons/fc"
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import Info from './Info';

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
            text: "Projetos",
            icon: <FcLinux />
        }
    ];

  return (
    <div className="container">
    <div style={{width: expand ? "200px" : "50px"}} className="container_sidebar">        
        <div className="container_section">            
            <FcMenu 
            onClick={ button }
            id='menu_click'
            className="aside__menu-click"
            />
            <div>
            <label style={{display: expand ? "block" : "none"}} 
                className="initial_icon"                
                htmlFor='menu_click'
                onClick={ button }                                
            >                            
            </label>
            </div>
            <div style={{marginLeft: expand ? "40px" : "0px"}} className="container_bars" />                            
        </div>
        {expand && <Info />}
        {
            menu.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: expand ? "block" : "none"}} className="link_text">{item.text}</div>
                </NavLink>
            ))
        }
        <div>
            <div className='aside__contact-container' style={{flexDirection: expand ? 'row' : 'column'}}>
            <a href='mailto:delsofelipe@gmail.com' target='_blank' rel='noreferrer'>
            <BiLogoGmail />
            </a>
            <a href='https://github.com/delso-ferreira' target='_blank' rel='noreferrer'>
            <BiLogoGithub />
            </a>
            <a href='https://www.linkedin.com/in/delsoferreira/' target='_blank' rel='noreferrer'>
            <BiLogoLinkedin />
            </a>
            </div>

        </div>
    </div>
    <main>{children}</main>
 </div>
  )
}

export default Aside;