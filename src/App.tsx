import React from 'react';
import './App.css';
import AdDesigner from './components/AdDesigner';
import Header from './components/Header';
import Votes from './components/Votes';
import Ad from './components/Ad';
import {useState} from "react";

function App() {
  
  return (
    <div className="App">
     <Header user="Rachel"/>
     <div className="adsDiv">
     <Ad flavor="Chocolate" fontSize={40} darkTheme={true}/> 
     <Ad flavor="Vanilla" fontSize={50} darkTheme={false} /> 
     <Ad flavor="Strawberry" fontSize={30} darkTheme={true}/>
     </div>
   
     <div className="AdVotes">
     <AdDesigner />
     <Votes />
     </div>
    
    </div>
  );
}

export default App;
