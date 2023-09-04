import * as React from 'react';
import {useRef, useEffect} from 'react';


function Header(){
    return(
        <div id="header" className="dark-banner">
            <img id="brand" src="img/logo.png" alt="logo" />
            <div id="menu">
                <div> Cocktails </div>
                <div> Tips & Tricks </div>
                <div> The Bar Cart </div>
            </div>
            <form id='search' action="">
                <input type="text" placeholder="Drink or ingredient ..." />
                <input type="submit" value="Search" />
            </form>
        </div>
        )
}

function Breadcrumb(){
    return(
        <div id="breadcrumb">
            <div className="bc-title">The best run recipes under the sun</div>
            <button className="btn bc-btn">Explore Cocktails</button>
        </div>
        )
}

export { Header, Breadcrumb };