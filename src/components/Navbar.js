import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { debounce } from './debounce';  



export const Navbar = () => {
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
 <Link to="/"  style={{ color: '#FAEBEFFF',textDecoration:"underline #FAEBEFFF" }}>
         <h2  >Kecskeméti Szakképzési Centrum  </h2>   
        <h4 >Állásportál <small>(gyakorlati projektfeladat)</small></h4>
</Link>
    </div>
  );
};
