const logo = require("../assets/logo.png");

const Home = () => {
  const title = "Welcome to Hooka.wiki!";
  const description = "Visit our Hookah Lab";
  return (
    <>
      <img src={logo} className="App-logo pageBody" alt="logo" />
      <p>{title}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {description}
      </a>
    </>
  );
};

export default Home;
