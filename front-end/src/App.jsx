import Header from './components/Header';
import Map from './components/Map';
import StatusBox from './components/StatusBox';
import Pollutants from './components/Pollutants';
import DataPanel from './components/DataPanel';
import InfoCard from './components/InfoCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section id="map" className="map-section">
          <Map />
        </section>

        <aside className="sidebar">
          <StatusBox />
          <Pollutants />
          <DataPanel />
          <InfoCard />
        </aside>
      </main>
    </div>
  );
}

export default App;
