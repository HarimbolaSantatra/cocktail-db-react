import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";

import { Home } from './Page.js';

import logo from './logo.svg';

import './Base.css';
import './Components.css';

function App() {
        return(
                <Routes>
                        <Route path="/" element={<Home/>} />
                </Routes>
        )
}

export default App;