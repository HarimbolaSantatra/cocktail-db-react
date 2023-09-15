import * as React from 'react';
import { useState } from 'react';
import {Button, SectionTitle, PlusSvg, HeartSvg, ListSvg} from './Utils.js';



function Loading({ text="Is Loading ..."}) {
    return(
        <div style={{padding: "30px"}}> {text} </div>
    )
}

function Header(){
    return(
        <div id="header" className="dark-banner">
            <img id="brand" src="img/logo.png" alt="logo" />
            <svg id="burger-menu" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div id="modal-menu" className='hide' >
                <svg id="modal-close-btn" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#1C274C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#1C274C"/>
                </svg>
                <div> Cocktails </div>
                <div> Tips & Tricks </div>
                <div> The Bar Cart </div>
            </div>
            <div id="menu">
                <a href="#header"> Cocktails </a>
                <a href="#header"> Tips & Tricks </a>
                <a href="#header"> The Bar Cart </a>
            </div>
            <form id='search' action="">
                <input type="text" placeholder="Drink or ingredient ..." />
                <input type="submit" value="Search" />
            </form>
        </div>
        )
}



function Carousel(){
    return(
        <div id="Carousel">
            <div className="bc-title">The best run recipes under the sun</div>
            <Button text="Explore Cocktails" type="white" round/>
        </div>
        )
}



function Card({idDrink=0, title="", likeNb=0, isLiked, imgUrl="img/margarita.jpeg"}) {
    const [liked, setLiked] = useState(isLiked);
    const [likeNumber, setLikeNumber] = useState(likeNb);
    const Card_likeClass = liked ? "Card_like liked": "Card_like";

    // toggle like and increment/decrement like number
    const toggleLike = () => {
      if (liked) {
        setLikeNumber(likeNumber-1);
      }
      else {
        setLikeNumber(likeNumber+1);
      }
      setLiked(!liked);
    }

    return(
        <div className="Card">
            <a href={`detail/${idDrink}`}>
              <img src={imgUrl} alt="drink-cover" />
            </a>
            <div className="Card_footer">
                <div className="Card_title">
                    <a href={`detail/${idDrink}`}> {title} </a>
                </div>
                <div className={Card_likeClass} onClick={toggleLike}> 
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>{likeNumber}</div>
                </div>
            </div>
        </div>
        )
}


function CardList({title, isLoading, children}) {
    return(
        <div className="section CardList">
            <SectionTitle title={title} />
            <div className="CardList_list"> 
                {children}
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
                   <a href="#header"> Manhattan Drinks </a> 
                   <a href="#header"> Martini Drinks</a> 
                   <a href="#header"> Old Fashioned Drinks </a> 
                </FooterBox>
                <FooterBox title="Spirits">
                   <a href="#header"> Bourbon Cocktails </a> 
                   <a href="#header"> Rum Cocktails</a> 
                   <a href="#header"> Tequila Cocktails </a> 
                </FooterBox>
                <FooterBox title="Seasonal">
                   <a href="#header"> Winter Drinks</a> 
                </FooterBox>
                <FooterBox title="Occasions">
                   <a href="#header"> Bachelorette Party Drinks </a> 
                   <a href="#header"> Brunch Drinks </a> 
                   <a href="#header"> Everyday Drinks </a> 
                </FooterBox>
            </FooterItem>
            <FooterItem title="Site Links" behavior="column">
                <FooterBox title="Company">
                   <a href="#header"> About </a> 
                   <a href="#header"> Brands </a> 
                   <a href="#header"> Site Map </a> 
                </FooterBox>
                <FooterBox title="Policies">
                   <a href="#header"> Cookie Policy </a> 
                   <a href="#header"> Privacy </a> 
                   <a href="#header"> Terms & COnditions </a> 
                   <a href="#header"> Privacy Settings </a> 
                   <a href="#header"> Supply Chain Transparence </a> 
                   <a href="#header"> Accessibility Statement </a> 
                </FooterBox>
                <FooterBox title="Ressources">
                   <a href="#header"> Drink Smart  </a> 
                   <a href="#header">Global Markging </a> 
                </FooterBox>
            </FooterItem>
        </div>
        )
}

function Breadcrumb({paths}) {
    const breadcrumbs = paths.map(element => 
        <span className="breadcrumbs_text"> { element } >> </span>
    )
    return(
        <div>
            {breadcrumbs}
        </div>
    )
}

export { Header, Carousel, CardList, Card, Newsletter, Footer, Breadcrumb, Loading};
