import * as React from 'react';
import { Header, Breadcrumb, CardList, Newsletter, Footer} from './Components.js';
import { cssColor } from './Consts.js';
import styled from 'styled-components';

function Home() {
        return (
        <div>
                <Header/>
                <Breadcrumb/>
                <CardList title={"Trending Recipes"}/>
                <Newsletter/>
                <Footer />
        </div>
        );
}

function CocktailRecipe() {
        return 0;
}

export {Home, CocktailRecipe} ;
