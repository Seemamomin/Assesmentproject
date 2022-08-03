/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/

import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "./Home.css";
// import Home component
import Home from "./Home";
// import About component
import About from "./About";
// import ContactUs component
import ContactUs from "./ContactUs";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<About/>} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contactus" element={<ContactUs/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        </Routes>
      </Router>
    </>
  );
}
  
export default App;