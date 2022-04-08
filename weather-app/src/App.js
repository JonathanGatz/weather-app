import logo from './logo.svg'
import './App.css'
import WeatherApi from './componenents/weatherApi'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <WeatherApi />

      </header>
    </div>
  )
}

export default App
