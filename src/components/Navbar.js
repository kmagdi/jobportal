import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { debounce } from './debounce';  
import "./Navbar.css"
import logo from "../ikon.ico"
/*import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);*/




export const Navbar = ({showLink}) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  
  const [x,setX]=useState(900)   
  
  useEffect(()=>{
    const resizeListener=window.addEventListener('resize',resizeFonts)
    return ()=>window.removeEventListener('resize',resizeListener)
})

const resizeFonts=()=>{setX(document.documentElement.clientWidth)} 
console.log("x="+x)                   
  
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
 }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
const respFontSize=x>700? '25px':(x>500?'20px':'16px')
  const navbarStyles = {
    position: 'fixed',
    height: '100px',
    width: '100%',
    backgroundColor: '#333D79FF',
    color:'#FAEBEFFF',
    textAlign: 'center',
    transition: 'top 0.6s',
    fontSize: respFontSize
   
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>  
      <div className="row">
          <div className="col-1 text-center" ><img className='p-2' src={logo} width={'60px'}/></div>
            <div className="col-10 text-center">
                  Kecskeméti Szakképzési Centrum
                 <div>
                   Állásportál (gyakorlati projektfeladat)
                   <div className='back'>
                      <Link to="/"  style={{ color: '#FAEBEFFF',textDecoration:"underline #FAEBEFFF" }}>     
                          <small className={showLink ? '': 'hidden'} >vissza a főoldalra...</small>
                      </Link>
                   </div>
                </div>
               
        </div>
       </div>
    </div>
  );
};
