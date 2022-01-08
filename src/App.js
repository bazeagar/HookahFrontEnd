import './App.scss';

const logo = require('./assets/logo.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Welcome to Hooka.wiki!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Hookah Lab
        </a>  
      </header>
    </div>
  );
}

export default App;
