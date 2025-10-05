import Header from './components/Header';
import Map from './components/Map';
import DataPanel from './components/DataPanel';
import StatusCards from './components/StatusCards';
import TipsSection from './components/TipsSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-container">
        <div className="map-section">
          <Map />
        </div>

        <div className="sidebar">
          <DataPanel />
          <StatusCards />
          <TipsSection />
        </div>
      </div>
    </div>
  );
}

export default App;
