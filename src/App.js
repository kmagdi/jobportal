import {React,useEffect,useState} from 'react';
import { Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
import { FilterBar } from './components/FilterBar'
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import { Detail} from './components/Detail';


//import "./App.css"


export const App = () => {
  const [showLink,setShowLink]= useState(false)
  const onClickLink=(value)=>{
      setShowLink(value)
  }
  return (
    <BrowserRouter basename="/jobportal">
       <Navbar showLink={showLink} />     
         <Switch>
          <Route path="/" exact render={()=>< FilterBar onClickLink={onClickLink} />}/>
          <Route path="/jobportal"  render={()=><FilterBar onClickLink={onClickLink}/>}/>
           <Route path="/detail/:id,:jobName" exact component={Detail}/>
           <Route path="/jobportal/detail/:id,:jobName" exact component={Detail}/>
           <Redirect to="/" />
        </Switch>
        <Footer/>
      
        
    </BrowserRouter>
   )  
}