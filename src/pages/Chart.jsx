import React, {useEffect,useState} from 'react'
import { Button, Nav, Tab, Container, Row, Col,Stack } from 'react-bootstrap';
import Header from "../components/header";
import ButtonTab from "../components/buttomTab";
import MainBody from "../components/MainBody";
import Header1 from "../components/Header1";
import OrderContents from "../components/OrderContents";


const Chart = () => {

   // const [cartItemCount, setCartItemCount] = useState(3);

   //import '../styles/ButtomTab.scss';

//    <a href="#" onClick={handleShow} className="navbar-brand">
//           <i className="fas fa-bars"></i>
//         </a>

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="">
        {isMobile ? <Header1  />:<Header/>}

           
          <div style={{marginTop:'60px'}} >

            <div className="" style={{marginTop:'70px'}} >
               <p> Chart </p>
            </div>

          </div>  
            


        {isMobile && <ButtonTab />}
    </div>
  )
}

export default Chart