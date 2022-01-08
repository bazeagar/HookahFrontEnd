import "./styles/App.scss";
import FindHookah from "./components/FindHookah";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Tips from "./components/Tips";
import TopNavBar from "./components/TopNavbar";
import HookahLab from "./components/HookahLab";

const App = () => {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FindHookah" element={<FindHookah />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/HookahLab" element={<HookahLab />} />
      </Routes>
    </div>
  );
};

export default App;
