import React from 'react';
import { Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
import { FilterBar } from './components/FilterBar'
import {BrowserRouter,Route,Switch} from "react-router-dom"


export const App = () => {
  return (
    <BrowserRouter>
       <Navbar />
       
        <div className="container-fluid p-5 " style={{ backgroundColor: '#FAEBEFFF',color: '#333D79FF' }}>
         <div className="row p-5 border justify-content-center">
            <FilterBar />
         </div>
        </div>
        <Footer/>
    </BrowserRouter>
   )  
}