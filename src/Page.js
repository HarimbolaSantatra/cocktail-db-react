import * as React from 'react';
import { useEffect, useState, useReducer } from 'react';
import { Header, Carousel, CardList, Card, Newsletter, Footer, Breadcrumb, Loading} from './Components.js';
import { endpoints } from './Consts.js';

function Home() {

  // cards: array of Object
  //      each Object represent a Card component
  //      each key=Card key and value is value

  useEffect(() => {
    // Import script 
    const body = document.querySelector('body');
    const script = document.createElement('script');

    script.setAttribute('src', 'script.js');
    body.appendChild(script);

  }, []);

  const [cardLoading, setCardLoading] = useState(true);


    // REDUCER
  const cardsReducer = (state, action) => {
    switch(action.type){
      case 'CARDS_UPDATE':
        let len = Object.keys(state).length; 
        if ( len === 5 ) {
            setCardLoading(false);
        }
        return { 
          ...state, 
          [len] : action.payload
        };
      default:
        throw new Error('Unrecognized type for your cardsDispatcher');
    }
  }


  const [cards, cardsDispatcher] = useReducer(cardsReducer, {});


  useEffect(() => {
    // API request for CardList: random drinks
    // se delay so that request are not successive
      for(let i=0; i<6; i++){
          fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
              .then(resp => resp.json())
              .then(res => { 
                  cardsDispatcher({
                      type: 'CARDS_UPDATE',
                      payload: res["drinks"][0]
                  });
              })
    }
  }, [])

  return (
    <>
    <Header/>
    <Carousel/>
    <CardList title={"Trending Recipes"} >
    { cardLoading ? 
      ( <Loading text={'Cocktail list is loading ...'}/> ) :
      (
        <>
        <Card idDrink={cards["0"]["idDrink"]} title={cards["0"]["strDrink"]} imgUrl={ cards["0"]["strDrinkThumb"]  + "/preview"} />
        <Card idDrink={cards["1"]["idDrink"]} title={cards["1"]["strDrink"]} imgUrl={ cards["1"]["strDrinkThumb"]  + "/preview"} />
        <Card idDrink={cards["2"]["idDrink"]} title={cards["2"]["strDrink"]} imgUrl={ cards["2"]["strDrinkThumb"]  + "/preview"} />
        <Card idDrink={cards["3"]["idDrink"]} title={cards["3"]["strDrink"]} imgUrl={ cards["3"]["strDrinkThumb"]  + "/preview"} />
        <Card idDrink={cards["4"]["idDrink"]} title={cards["4"]["strDrink"]} imgUrl={ cards["4"]["strDrinkThumb"]  + "/preview"} />
        <Card idDrink={cards["5"]["idDrink"]} title={cards["5"]["strDrink"]} imgUrl={ cards["5"]["strDrinkThumb"]  + "/preview"} />
        </>
      )
    
    }
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
    <Breadcrumb paths={["Home", "Margarita", "Sauza Classic"]} />
    <Footer />
    </>
  );
}

export {Home, CocktailDetail} ;
