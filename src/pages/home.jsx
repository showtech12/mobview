import React, {useEffect,useState} from 'react'
import Header from "../components/header";
import ButtonTabs from "../components/tab";
import ButtonTab from "../components/buttomTab";
import MainBody from "../components/MainBody";
import Header1 from "../components/Header1";

 const Home=()=> {
  //const [cartItemCount, setCartItemCount] = useState(3);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="screen" >
        {/* <Header1 cartItemCount={cartItemCount} /> */}
       {isMobile ? <Header1  />:<Header/>}

         <MainBody />
       {isMobile && <ButtonTab />}
    
    </div>
  )
}

export default Home