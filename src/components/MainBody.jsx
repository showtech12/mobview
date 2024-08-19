import React from 'react'
import { Button, Nav, Tab, Container, Row, Col } from 'react-bootstrap';

const MainBody = () => {

  const sendMessageToReactNative = () =>{
    window.ReactNativeWebView.postMessage('notify');
  }
const test =()=>{
  console.log("test")
}
  return (
          <div className="" style={{marginTop:'50px'}} >
               <p> Home </p>

               <Button variant="success" className="" onClick={sendMessageToReactNative}>  Alert</Button>
              <br/>
              <br/>
               <Button variant="primary" onClick={test} className=""> Notify  </Button>

            </div>
  )
}

export default MainBody