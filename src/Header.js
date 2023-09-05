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

function Button({type="white", text="Not Text", size="little", chevron="none", round}) {

    // class
    let cl = "";
    switch(type) {
    case "white": 
        cl = "btn bc-btn white-btn";
        break;
    case "orange": 
        cl = "btn bc-btn orange-btn";
        break;
    default:
        cl = "btn bc-btn white-btn";
        break;
    }

    // button size
    switch(size) {
    case "little": 
        cl += " little-btn";
        break;
    case "big": 
        cl += " big-btn";
        break;
    default:
        cl += " little-btn";
        break;
    }

    // chevron
    switch (chevron) {
    case "right":
        text += " >>";
        break;
    case "left":
        text += " <<";
        break;
    default:
        break;
    }

    // round
    if (round) {
        cl += " round-btn";
    }

    return(
            <button className={cl}> {text} </button>
        )
}

function Breadcrumb(){

    return(
        <div id="breadcrumb">
            <div className="bc-title">The best run recipes under the sun</div>
            <Button text="Explore Cocktails" type="white" round/>
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

function SectionTitle({title="My Big Title"}) {
    return(
        <div className="SectionTitle"> {title} </div>
        )
}

function CardList({title}) {
    return(
        <div className="section CardList">
            <SectionTitle title={title} />
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


function PlusSvg(width='80px', height="auto", fill1="none", fill2="#98C6C9", stroke="#EF6A40") {
    return(
        <svg width={width} height={height} viewBox="0 0 32 32" version="1.1">
        <defs>
        </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill={fill1} fill-rule="evenodd">
                <g id="Icon-Set-Filled" transform="translate(-466.000000, -1089.000000)" fill={fill2}>
                    <path d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z">
                    </path>
                </g>
            </g>
    </svg>
        );
}
function ListSvg(width='80px', height="auto", stroke="#E2A432") {
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        )
}
function HeartSvg(width='80px', height="auto", fill="#EF6A40", stroke="#EF6A40") {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
}


function NewsletterItem({title, svg=2, description}) {
    const svgs = [PlusSvg(), ListSvg(), HeartSvg()];
    return (
        <div className="NewsletterItem">
            {svgs[svg]}
            <div className="NewsletterItem_title "> {title} </div>
            <div> {description} </div>
        </div>
        )
}

function Newsletter() {
    const saveDesc = "Save one or more drink recipes anytime" + 
                    "then easily access them on your personal Dashboard page when you are ready" +
                    " to make your drink recipes.";
    const listDesc = "No need to double back to the store! Keep all those importantn ingredients on hand.";
    const likeDesc = "Show your appreciation fro the dirnks you love";
    
    return(
        <div className="section Newsletter">
            <SectionTitle title="Sign Up For Free"/>
            <div className="Newsletter_services">
                <NewsletterItem 
                    title="Save Recipes" 
                    description={saveDesc}
                    svg={0}
                    />
                <NewsletterItem 
                    title="Create Shopping List" 
                    description={listDesc}
                    svg={1}
                    />
                <NewsletterItem 
                    title="Like Your Favorites" 
                    description={likeDesc}
                    />
            </div>
            <div className="Newsletter_button">
                <Button text="Register" type="orange" size="big" 
                    chevron="right"/>
                <Button text="Sign In" type="orange" size="big" 
                    chevron="right"/>
            </div>
        </div>
        )
}

export { Header, Breadcrumb, CardList, Newsletter };