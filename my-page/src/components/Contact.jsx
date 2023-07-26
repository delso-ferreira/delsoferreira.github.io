import React from 'react'
import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"


function Contact() {
  return (
    <div className='contact__container'>        
        <BiLogoGmail size={30}/>
        <BiLogoLinkedin  size={30}/>
        <BiLogoGithub  size={30}/>
    </div>
  )
}

export default Contact