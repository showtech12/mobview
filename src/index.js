import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//App
import 'bootstrap/dist/css/bootstrap.min.css';

//costom Style
// import "./styles/w3.css";
// import "./styles/index.scss";
// import "./styles/small_screen.scss";
// import "./styles/medium_screen.scss";
// import "./styles/large_screen.scss";
//===================================================



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
