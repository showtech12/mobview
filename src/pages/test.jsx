/* eslint-disable no-undef */
import React, { Component } from "react";
import Header from "../components/header";

// Example global variable, you might need to define it in your environment or configuration
const NOTI_URL = window.NOTI_URL || ""; // Or another method of accessing the URL

class Home extends Component {
  handleNotimessage = (var1, var2) => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        title: var1,
        content: var2,
        notiType: "push_notification",
        type: "success",
      })
    );
  };

  handleToastmessage = (var1, var2) => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        title: var1,
        content: var2,
        notiType: "toast_notification",
        type: "success",
      })
    );
  };

  render() {
    // let nofiicationUrl = "";

    // if (NOTI_URL) {
    //   nofiicationUrl = NOTI_URL;
    // }
    

    return (
      <div>
        <Header />
       
      </div>
    );
  }
}

export default Home;
