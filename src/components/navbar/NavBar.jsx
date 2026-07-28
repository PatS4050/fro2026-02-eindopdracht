import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import './NavBar.css'
import Position from "../position/Position.jsx";
import locationImage from "../../assets/navigation/navIconLoc.svg";
import menuIcon from "../../assets/navigation/navIcon.svg"
import inlogIcon from "../../assets/navigation/iconPerson.svg"

function NavBar({location, weather}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                onMouseEnter={() => {setOpen(true)}}
                onMouseLeave={() => {setOpen(false)}}
            >
                <ul className='navbar'>
                    <li
                        onMouseEnter={() => {setOpen(true)}}
                        onMouseLeave={() => {setOpen(false)}}
                    >
                        <button><img src={menuIcon} alt='icon menu'/></button>
                        {open && (
                            <div className="dropMenu">
                                <Link to="/location">zoek locatie</Link>
                                <Link to="/background">wijzig achtergrond</Link>
                                <Link to="/predictions">weersvoorspelling</Link>
                                <Link to="/weatherchoice">weer keuze</Link>
                            </div>
                        )}
                    </li>
                    <li>
                       <span>
                           <img src={locationImage} alt='location pointer'/>
                           {/*<p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>*/}
                           <p>{location?.name}</p>
                       </span>
                    </li>
                    <li>
                        <Link to="/signin">
                            <button><img src={inlogIcon} alt='icon person'/></button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;




