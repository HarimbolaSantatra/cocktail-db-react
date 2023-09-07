import * as React from 'react';
import {useEffect} from 'react';
import { Header, Breadcrumb, CardList, Card, Newsletter, Footer} from './Components.js';

function Home() {
        // Import script modal.js
        useEffect(() => {
                const body = document.querySelector('body');
                const script = document.createElement('script');
                script.setAttribute('src', 'modal.js');
                body.appendChild(script);
        }, []);

        return (
        <>
                <Header/>
                <Breadcrumb/>
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

function CocktailRecipe() {
        return 0;
}

export {Home, CocktailRecipe} ;
