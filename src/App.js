import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Home from './pages/home'
import Page404 from './pages/404'
import Orders from './pages/Orders'
import Chart from './pages/Chart'
import Account from './pages/Account'
//import Home from './pages/test'


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/account" element={<Account />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
