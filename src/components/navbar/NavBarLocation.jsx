import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './NavBarLocation.css'
import locationImage from "../../assets/navigation/navIconLoc.svg";
import iconLeft from "../../assets/navigation/iconArrowLeft.svg"

function NavBarLocation({location}) {
    const [open, setOpen] = useState(false);


    return (
        <>
            <nav>
                <ul className='navbar-left'>
                    <li>
                        <Link to="/">
                    <button><img src={iconLeft} alt='icon left arrow'/></button>
                        </Link>
                    </li>
                    <li>
                        <h5>Locaties</h5>
                       <span>
                           <img src={locationImage} alt='location pointer'/>
                           <p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>
                       </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBarLocation;




