import './App.css';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App" alt="Image by kjpargeter on Freepik">
      <Nav />
      <h3>J&G</h3>
      <h1>Mobile Bar</h1>
      <h2>Bartending Services</h2>
      <h4>
        <span>Book</span>
        <span>your</span>
        <span>Event</span>
        <span>Today!</span>
      </h4>
      <div id="borderEventList">
        <h5>Specialized In:</h5>
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
      
      <footer>
        <p>Designed by Doris Morales</p>
      </footer>
    </div>
  );
}

export default App;
