import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './NavBarForcast.css'
import locationImage from "../../assets/navigation/navIconLoc.svg";
import iconLeft from "../../assets/navigation/iconArrowLeft.svg"

function NavBarForcast({location, weather}) {
    const [open, setOpen] = useState(false);


    return (
        <>
            <nav>
                <ul className='navbar'>
                    <li>
                        <Link to="/">
                    <button><img src={iconLeft} alt='icon person'/></button>
                        </Link>
                    </li>
                    <li>
                        <h2>weersvoorspelling</h2>
                       <span>
                           <img src={locationImage} alt='location pointer'/>
                           <p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>
                           {/*<p>{weather?.name}</p>*/}
                       </span>
                    </li>
                    <li></li>
                    {/*<li>*/}
                    {/*    <Link to="/signin">*/}
                    {/*        <button><img src={inlogIcon} alt='icon person'/></button>*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </>
    );
}

export default NavBarForcast;




