import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { debounce } from './debounce';  
import "./Navbar.css"
import logo from "../ikon.ico"




export const Navbar = ({showLink}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  
  
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
 }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '100px',
    width: '100%',
    backgroundColor: '#333D79FF',
    color:'#FAEBEFFF',
    textAlign: 'center',
    transition: 'top 0.6s'
    
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>  
      <div className="row">
          <div className="col-2 text-left pl-5 pt-2"><img src={logo} alt='logo' width={'50px'}/></div>
          <div className="col-8 text-center pt-2"><h4>  Kecskeméti Szakképzési Centrum  </h4> </div>
           <div className="col-2">
              <Link to="/"  style={{ color: '#FAEBEFFF',textDecoration:"underline #FAEBEFFF" }}>     
                  <small className={showLink ? '': 'hidden'} >vissza a főoldalra...</small>
              </Link>
            </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">Állásportál (gyakorlati projektfeladat)</div> 
   </div>
       
    </div>
  );
};
