import "./styles/App.scss";
import FindHookah from "./components/FindHookah";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Tips from "./components/Tips";
import TopNavBar from "./components/TopNavbar";
import HookahLab from "./components/HookahLab";
import Posts from "./components/Posts";
import PageNotFound from "./components/404";
import { dummyLists } from "./components/FindHookah/DummyHookahList";

const App = () => {
  return (
    <div className="App">
      <TopNavBar className="navbar" />
      <Routes className="pageBody">
        <Route path="/" element={<Home />} />
        <Route path="/FindHookah" element={<FindHookah list={dummyLists} />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path="/HookahLab" element={<HookahLab />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
