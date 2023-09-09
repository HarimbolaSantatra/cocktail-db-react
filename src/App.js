import * as React from 'react';
import { Route, Routes } from "react-router-dom";

import { Home, CocktailDetail } from './Page.js';

import './Base.css';
import './Components.css';

function App() {
        return(
                <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/detail" element={<CocktailDetail/>} />
                </Routes>
        )
}

export default App;
