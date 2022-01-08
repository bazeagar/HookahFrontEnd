import "./styles/FindHookah.scss";
import Map from "./Map";
import GetHookahList from "./HookahList";
import SearchBar from "./SearchBar";
import { dummyLists } from "./DummyHookahList";

const FindHookah = () => {
  const title = "Find hookah near me";
  return (
    <div className="FindHookah">
      <div className="FindHookah-header">
        <SearchBar />
      </div>
      <div className="FindHookah-body">
        <div className="FindHookah-list">
          <GetHookahList list={dummyLists} />
        </div>
        <Map class="FindHookah-map" />
      </div>
    </div>
  );
};

export default FindHookah;
