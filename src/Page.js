import * as React from 'react';
import {useEffect} from 'react';
import { Header, Carousel, CardList, Card, Newsletter, Footer} from './Components.js';

function Home() {
        // Import script 
        useEffect(() => {
                const body = document.querySelector('body');
                const script = document.createElement('script');
                script.setAttribute('src', 'script.js');
                body.appendChild(script);
        }, []);

        return (
        <>
                <Header/>
                <Carousel/>
                <CardList title={"Trending Recipes"}>
                    <Card/>
                    <Card title={"Appletini"}/>
                    <Card title={"Samba Margarita"} isLiked/>
                    <Card title={"Nectaria"}/>
                    <Card title={"Summer Fish Bowl"}/>
                    <Card title={"El Tesoro Paloma"} isLiked/>
                </CardList>
                <Newsletter/>
                <Footer />
        </>
        );
}

function CocktailDetail() {
    return(
        <>
            <Header />
            <Footer />
        </>
    );
}

export {Home, CocktailDetail} ;
