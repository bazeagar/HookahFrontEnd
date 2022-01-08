import "./styles/FindHookah.scss";
import Map from "./FindHookah/Map";
import GetHookahList from "./FindHookah/HookahList";
import SearchBar from "./FindHookah/SearchBar";
import { useState, useEffect } from "react";

const FindHookah = (props) => {
  const [listItems, setListItems] = useState(props.list);
  const [activeListItem, setActiveListItem] = useState(null);

  useEffect(() => {
    setListItems(props.list);
  }, [props.list]);

  return (
    <div className="FindHookah">
      <div className="FindHookah-header">
        <SearchBar />
      </div>
      <div className="FindHookah-body">
        <div className="FindHookah-list">
          <GetHookahList
            list={listItems}
            activeListItem={activeListItem}
            setActiveListItem={setActiveListItem}
          />
        </div>
        <Map
          class="FindHookah-map"
          list={listItems}
          activeListItem={activeListItem}
          setActiveListItem={setActiveListItem}
        />
      </div>
    </div>
  );
};

export default FindHookah;
