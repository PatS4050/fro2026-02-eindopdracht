import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './NavBarForcast.css'
import locationImage from "../../assets/navigation/navIconLoc.svg";
import iconLeft from "../../assets/navigation/iconArrowLeft.svg"
import inlogIcon from "../../assets/navigation/iconPerson.svg";

function NavBarForcast({location, weather}) {
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
                        <h5>weersvoorspelling</h5>
                       <span>
                           <img src={locationImage} alt='location pointer'/>
                           <p>{location?.name}</p>
                           {/*<p>{weather?.name}</p>*/}
                       </span>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBarForcast;




