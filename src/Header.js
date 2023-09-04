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

function Card({title="Fresh Midori Sour", likeNb=117, isLiked}) {
    const Card_likeClass = isLiked ? "Card_like liked": "Card_like";
    return(
        <div className="Card">
            <img src="/img/margarita.jpeg" alt="drink-cover" />
            <div className="Card_footer">
                <div className="Card_title">
                    {title}
                </div>
                <div className={Card_likeClass}> 
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div>{likeNb}</div>
                </div>
            </div>
        </div>
        )
}

function CardList({title}) {
    return(
        <div className="CardList">
            <div className="CardList_title"> {title} </div>
            <div className="CardList_list"> 
                <Card/>
                <Card title={"Appletini"}/>
                <Card title={"Samba Margarita"} isLiked/>
                <Card title={"Nectaria"}/>
                <Card title={"Summer Fish Bowl"}/>
                <Card title={"El Tesoro Paloma"} isLiked/>
            </div>
        </div>
        )
}

export { Header, Breadcrumb, Card, CardList };