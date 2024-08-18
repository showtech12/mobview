import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


//App
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

//costom Style
// import "./styles/w3.css";
 import "./styles/navbar.scss";
 import "./styles/index.scss";
// import "./styles/small_screen.scss";
// import "./styles/medium_screen.scss";
// import "./styles/large_screen.scss";
//===================================================
//From Theme
//import "./vendor/slick/slick.min.css"
//import "./vendor/slick/slick-theme.min.css"
//import "./vendor/icons/icofont.min.css"
//import "vendor/bootstrap/css/bootstrap.min.css"
// import "vendor/slick/slick.min.css"
// import "vendor/slick/slick.min.css"
// import "vendor/slick/slick.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
