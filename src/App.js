import './App.css';
import React from 'react';
import Nav from './Nav.js';
import { useState } from 'react';

function App() {

  const drink = React.useRef(null)
  const upward = React.useRef(null)
  const [down,setDown]=useState(false)

  const handleScrollDown = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    setDown(!down)
  };

  const handleScrollUp = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
    setDown(!down)
  };

  return (
    <div className="App" alt="Image by kjpargeter on Freepik">
      <Nav />
      <div id="cocktail"></div>
      <h3 ref={upward}>J&G</h3>
      <h1>Mobile Bar</h1>
      <h2>Bartending Services</h2>
      <h4><a href="mailto:andradejc82@gmail.com">
        <span>&#62;&#62; Book</span>
        <span>your</span>
        <span>Event</span>
        <span>Today! &#60;&#60;</span>
      </a>
      </h4>
      <div id="borderEventList">
        <h5>Our Services</h5>
        <div id="eventList">
          <div className="listColumn">
            <li>Wedding Reception</li>
            <li>Private Events</li>
            <li>Corporate Events</li>
            <li>Pop-up Events</li>
          </div>
          <div className="listColumn">
            <li>Couple Date Night</li>
            <li>Birthday Parties</li>
            <li>Anniversarys</li>
            <li>Venues</li>
          </div>
        </div>
        <p id="andMoreText">And More!!!</p>
      </div>
      <div>{down?<span style={{left:'48%',fontSize:'48px'}} className="material-symbols-outlined" onClick={() => {handleScrollUp(upward.current)}}>keyboard_arrow_up</span>:<span style={{left:'48%',fontSize:'48px'}} className="material-symbols-outlined" onClick={(e) => {handleScrollDown(drink.current)}}>expand_more</span>}</div>
      <footer ref={drink}>
        <h6>J&G</h6>
        <div id="breakline"></div>
        <div id="footerinfo">
          <h7>Get in Touch</h7>
          <div id="call" style={{}}><span className="material-symbols-outlined" style={{fontSize:'24px',marginLeft:'10px',width:'25px',height:'25px'}}>call</span><span className="number" href="tel:+19294189777"><a className='phonenumber'>929-418-9777</a></span></div>
          <div id="call2" style={{}}><span className="material-symbols-outlined" style={{fontSize:'24px',marginLeft:'10px',width:'25px',height:'25px'}}>call</span><span className="number"><a href="tel:+16465093905" className='phonenumber'>646-509-3905</a></span></div>
          <div id="call3" style={{}}><span class="material-symbols-outlined" style={{fontSize:'24px',marginLeft:'10px',width:'25px',height:'25px'}}>mail</span><span className="number">andradejc82@gmail.com</span></div>
        </div>
      </footer>
      <p id="designcreds">Copyright@2024 Designed by Doris Morales</p>
    </div>
  );
}

export default App;
