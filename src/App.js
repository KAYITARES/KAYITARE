import React,{useState,useEffect} from "react";

import {BrowserRouter} from 'react-router-dom';
import Route from './routes';
import logo from './assets/images/logo.png';

import "./App.css";
import "./media.css";
import ReactDOM from "react-dom";
// import logo from './assets/images/logo.png'


function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },3000)
  },[])
  return (
    <>
    {
            loading ?
            <div className="home">
              <img src={logo} className="spinner-logo"/>
            {/* <HashLoader
  
            color={"#3fb9b4"}
            loading={loading}
           
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> */}
          </div>
           :
           <BrowserRouter>
           <Route></Route>
           </BrowserRouter>
    }

    </>
  );
}


export default App;
