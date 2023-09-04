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

function Card({title="Fresh Midori Sour", like=117}) {
    return(
        <div className="card">
            <img src="/img/main.jpg" alt="drink-cover" />
            <div className="card-footer">
                <div className="card-title">
                    {title}
                </div>
                <div className="card-like"> {like} </div>
            </div>
        </div>
        )
}

function CardList({title}) {
    return(
        <div className="card-content">
            <div> {title} </div>
            <div className="card-list"> 
                <Card/>
                <Card title={"Appletini"}/>
                <Card title={"Samba Margarita"}/>
                <Card title={"Nectaria"}/>
                <Card title={"Summer Fish Bowl"}/>
                <Card title={"El Tesoro Paloma"}/>
            </div>
        </div>
        )
}

export { Header, Breadcrumb, Card, CardList };