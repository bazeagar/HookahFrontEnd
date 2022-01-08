import { Link } from "react-router-dom";

const logo = require("../assets/logo.png");

const Home = () => {
  const title = "Welcome to Hooka.wiki!";
  const description = "Visit our Hookah Lab";
  return (
    <>
      <img src={logo} className="App-logo pageBody" alt="logo" />
      <p>{title}</p>
      <Link
        style={{
          textDecoration: "none",
          fontSize: "1rem",
          color: "white",
          display: "block",
        }}
        to="/HookahLab"
      >
        {description}
      </Link>
    </>
  );
};

export default Home;
