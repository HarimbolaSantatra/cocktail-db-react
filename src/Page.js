import * as React from 'react';
import { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Carousel, CardList, Card, Newsletter, Footer, Loading } from './Components.js';
import { DetailContainer, Breadcrumb, Detail } from './DetailCompo.js';
import { endpoints } from './Consts.js';

function importScript () {
  useEffect(() => {
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.setAttribute('src', '/script.js');
    script.setAttribute('type', 'text/javascript');
    body.appendChild(script);
  }, []);
}

function Home() {

  // cards: array of Object
  //      each Object represent a Card component
  //      each key=Card key and value is value

  importScript();

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

  importScript();

  // save drink details data
  const [drinksDetail, setDrinksDetails] = useState({});
  const [feats, setFeats ] = useState([]);
  // save loading API status
  const [loading, setLoading] = useState(true);
  // save drink id from URL
  const {drinkId} = useParams();

  // API request for detail about drink
  useEffect(() => {
      for(let i=0; i<6; i++){
          fetch( endpoints.cocByID + drinkId )
              .then(resp => resp.json())
              .then(resp => {
                setDrinksDetails(resp.drinks[0]);
                setFeats([ 
                  resp.drinks[0].strIngredient1,
                  resp.drinks[0].strCategory,
                  resp.drinks[0].strAlcoholic,
                  ])
                setLoading(false);
              })
    }
  }, [])

  // Loading screen or main content
  let mainContent = loading ? 
      ( <Loading text={' Details are loading ...'}/> ) :
      (
        <>
        <Breadcrumb paths={["Home", "Margarita", "Sauza Classic"]} />
        <Detail
          title={drinksDetail.strDrink}
          desc={drinksDetail.strInstructions}
          feats={feats}
        />
        </>
      );

  return(
    <>
    <Header />
    <DetailContainer>
      {mainContent}
    </ DetailContainer>
    <Footer />
    </>
  );
}


export {Home, CocktailDetail};
