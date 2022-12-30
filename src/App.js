import React from "react";

import {BrowserRouter} from 'react-router-dom';
import Route from './routes';

import "./App.css";
import "./media.css";

// import logo from './assets/images/logo.png'


function App() {
  return (
    <>
 <BrowserRouter>
 <Route></Route>
 </BrowserRouter>
    </>
  );
}

export default App;
