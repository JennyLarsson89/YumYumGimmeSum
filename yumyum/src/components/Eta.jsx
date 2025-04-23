import './styling/Eta.scss'
import logoTransparent from '../assets/Group 6.svg'
import wontonBox from '../assets/boxtop 1.png'
import logo from '../assets/logo.png'
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Eta = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const orderData = location.state?.orderData;
    const [totalPrice, setTotalPrice] = useState(0);
    
    function routeToMenu() {
        navigate('/menu');
     }
     
     const formatLocalTime = (utcTimestamp) => {
        if (!utcTimestamp) return "N/A"; 

        const date = new Date(utcTimestamp); 
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hourCycle: "h23" }); 
    };



    return (
        <>
        <section className='background'>
        <section className='eta-background'>


            <img className='logo-small' src={logoTransparent}></img>

            <img className='wonton-box' src={wontonBox}></img>

            <p className='wonton-text'>DINA WONTONS<br />TILLAGAS!</p>

            <p className='eta-text'>ETA {formatLocalTime(orderData?.eta)}</p>

            <p className='order-number-text'>#{orderData?.id ?? "Ingen beställning gjord."}</p>


            <button className='new-order-button' onClick={routeToMenu}>GÖR EN NY BESTÄLLNING</button>


        </section>
        </section>
        </>
    )

}

export default Eta