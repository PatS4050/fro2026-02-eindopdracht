import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './NavBar.css'
import Position from "../position/Position.jsx";
import locationImage from "../../assets/navigation/navIconLoc.svg";

function NavBar({location}) {
    return (
        <>
            <nav>
                <ul className='navbar'>
                    <li>
                        <button></button>
                    </li>
                    <li>
                       <span>
                           <img src={locationImage} alt='location pointer' />
                           <p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>
                       </span>
                    </li>
                    <li>
                        <button></button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;




