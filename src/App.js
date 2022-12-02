import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import az from './images/az.jpg'; 
import aa from './images/aa.jpg';
function sayHello() {
  alert('nice try!');
}

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
      <Footer/>
      <img src={az} className="App-logo2" alt="logoSuu" />
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <hr/>
          <td>Male</td>
        </tr>
      </table>
      <button style={{color: "red",backgroundColor: "lightblue",width:500,height:500}}  onClick={sayHello}>LOgiN</button>;
      <button style={{color: "red",backgroundColor: "lightblue",width:500,height:500}}  onClick={sayHello}>sign up</button>;
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <img src={aa} className="App-logo2" alt="logoSuu" />
      <br/>
      <br/>
      <br/>
      <br/>
      
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        WELCOME !
      </h1>
      
    </div>
  );
}

export default App;
