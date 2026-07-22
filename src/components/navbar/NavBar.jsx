import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './NavBar.css'
import Position from "../position/Position.jsx";

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button></button>
                    </li>
                    <li>
                       <span>
                            <Position />
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




