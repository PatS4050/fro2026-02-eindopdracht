import React from 'react';
import {useEffect, useState} from "react";
// import axios from "axios";
import './Position.css';
import locationImage from "../../assets/navigation/navIconLoc.svg";

function Position({location}) {

    return (
                <span>
                    <img src={locationImage} alt='location pointer' />
                    <p>{location?.latitude.toFixed(2)} - {location?.longitude.toFixed(2)}</p>
                </span>
    );}

export default Position;




