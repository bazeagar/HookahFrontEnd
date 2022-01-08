import './styles/FindHookah.scss';
import Map from './Map';

const FindHookah = () => {
  const title = "Find hookah  near me";
  return (
    <div className="FindHookah">
      <div className="FindHookah-header">
        {title}
      </div>
      <div className="FindHookah-body">
        <div className="FindHookah-list">List View coming soon</div>
        <Map class="FindHookah-map" />
      </div>
    </div>
  );
};

export default FindHookah;
