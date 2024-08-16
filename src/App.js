import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Home from './pages/home'


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
