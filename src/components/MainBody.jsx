import React from 'react'
import { Button, Nav, Tab, Container, Row, Col } from 'react-bootstrap';

const MainBody = () => {

  const sendMessageToReactNative = () =>{
    window.ReactNativeWebView.postMessage('notify');
  }

const MyNofy =()=>{
  window.ReactNativeWebView.postMessage('myNoti');
}

  return (
          <div className="" style={{marginTop:'50px'}} >
               <p> Home my home updated </p>

               <Button variant="success" className="" onClick={sendMessageToReactNative}>  Alert</Button>
              <br/>
              <br/>
               <Button variant="primary" onClick={MyNofy} className=""> Notify  </Button>

            </div>
  )
}

export default MainBody