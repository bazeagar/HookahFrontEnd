import "./App.scss";
import FindHookah from "./components/FindHookah";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import TopNavBar from "./components/TopNavbar";

const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindHookah" element={<FindHookah />} />
      </Routes>
    </div>
  );
};

export default App;
