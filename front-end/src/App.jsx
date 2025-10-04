import Map from './components/Map'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='cards-section'>
        <Card />
      </div>
      <div className='map-section'>
        <Map />
      </div>
    </div>
  )
}

export default App
