import "./App.scss";
import FindHookah from "./components/FindHookah";

const logo = require("./assets/logo.png");

const App = () => {
  const title = "Welcome to Hooka.wiki!";
  const description = "Visit our Hookah Lab";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {description}
        </a>
      </header>
      <FindHookah />
    </div>
  );
};

export default App;
