import React from 'react';
import { Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
import { FilterBar } from './components/FilterBar'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import { Detail} from './components/Detail';
import {NotFound} from './components/NotFound'
//import "./App.css"


export const App = () => {
  return (
    <BrowserRouter basename="/jobportal">
       <Navbar />
      
         <Switch>
          
          <Route path="/" exact component={ FilterBar}/>
          <Route path="/jobportal"  component={ FilterBar}/>
           <Route path="/detail/:id,:jobName" exact component={Detail}/>
           <Route component={NotFound} />
        </Switch>
        <Footer/>
    </BrowserRouter>
   )  
}