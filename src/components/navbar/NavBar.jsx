import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './NavBar.css'
import Position from "../position/Position.jsx";
import locationImage from "../../assets/navigation/navIconLoc.svg";
import menuIcon from"../../assets/navigation/navIcon.svg"
import inlogIcon from"../../assets/navigation/iconPerson.svg"

function NavBar({location}) {
    return (
        <>
            <nav>
                <ul className='navbar'>
                    <li>
                        <button><img src={menuIcon} alt='icon menu' /></button>
                    </li>
                    <li>
                       <span>
                           <img src={locationImage} alt='location pointer' />
                           <p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>
                       </span>
                    </li>
                    <li>
                        <button><img src={inlogIcon} alt='icon person' /></button>

                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;




