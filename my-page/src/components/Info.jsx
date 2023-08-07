import React from 'react'
import profile from '../images/profile.jpg'
import '../styles/info.css';

function Info() {
  return (
    <div className="info__container">
        <div className="info__container-profile">
            <img src={profile} alt="Profile" className="info__picture"/>
            <div className="info__container-city">                
            <h4>Nova Iguaçu, RJ</h4>
            </div>
        </div>
    </div>
  )
}

export default Info