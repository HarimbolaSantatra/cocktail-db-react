import * as React from 'react';
import {useRef, useEffect} from 'react';
import {Button, SectionTitle, PlusSvg, HeartSvg, ListSvg} from './Utils.js';


function Header(){
    return(
        <div id="header" className="dark-banner">
            <img id="brand" src="img/logo.png" alt="logo" />
            <svg id="burger-menu" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
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
    const likeDesc = "Show your appreciation fro the drinks you love";
    
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
            <div className="btn-group">
                <Button text="Register" type="orange" size="big" 
                    chevron="right"/>
                <Button text="Sign In" type="orange" size="big" 
                    chevron="right"/>
            </div>
        </div>
        )
}

function FooterItem ({title, children, behavior="wrap"}) {
    let cl = "FooterItem_child";
    switch(behavior){
        case "wrap":
            cl += " FooterItem_child__wrap";
            break;
        case "column":
            cl += " FooterItem_child__column";
            break;
        default:
            cl +=  " FooterItem_child__not-grid";
            break;
    }
    return(
            <div className="FooterItem"> 
                <div className="FooterItem_title"> {title} </div>
                <div className={cl}>{children}</div>
            </div>
    )
}

function FooterBox ({title, children}) {
        return(
                <div className="FooterBox">
                    <div className="FooterBox_title" > {title} </div>
                    {children}
                </div>
        )
}

function Footer() {
    return (
        <div className="Footer">
            <FooterItem behavior={"none"} >
                <img className="little-logo" src="img/logo.png" alt="logo" />
                <div className="btn-group">
                    <Button type="white" text="Register"/>
                    <Button type="orange" text="Sign In"/>
                </div>
            </FooterItem>
            <FooterItem title="Popular Search">
                <FooterBox title="drink type">
                   <a href="#"> Manhattan Drinks </a> 
                   <a href="#"> Martini Drinks</a> 
                   <a href="#"> Old Fashioned Drinks </a> 
                </FooterBox>
                <FooterBox title="Spirits">
                   <a href="#"> Bourbon Cocktails </a> 
                   <a href="#"> Rum Cocktails</a> 
                   <a href="#"> Tequila Cocktails </a> 
                </FooterBox>
                <FooterBox title="Seasonal">
                   <a href="#"> Winter Drinks</a> 
                </FooterBox>
                <FooterBox title="Occasions">
                   <a href="#"> Bachelorette Party Drinks </a> 
                   <a href="#"> Brunch Drinks </a> 
                   <a href="#"> Everyday Drinks </a> 
                </FooterBox>
            </FooterItem>
            <FooterItem title="Site Links" behavior="column">
                <FooterBox title="Company">
                   <a href="#"> About </a> 
                   <a href="#"> Brands </a> 
                   <a href="#"> Site Map </a> 
                </FooterBox>
                <FooterBox title="Policies">
                   <a href="#"> Cookie Policy </a> 
                   <a href="#"> Privacy </a> 
                   <a href="#"> Terms & COnditions </a> 
                   <a href="#"> Privacy Settings </a> 
                   <a href="#"> Supply Chain Transparence </a> 
                   <a href="#"> Accessibility Statement </a> 
                </FooterBox>
                <FooterBox title="Ressources">
                   <a href="#"> Drink Smart  </a> 
                   <a href="#">Global Markging </a> 
                </FooterBox>
            </FooterItem>
        </div>
        )
}

export { Header, Breadcrumb, CardList, Newsletter, Footer };
