import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header">
        <p className="App">
        <img src={process.env.PUBLIC_URL+"Modificaciones.png"} />
        </p>
        <p className="App">
        <img src={process.env.PUBLIC_URL+"Actividades.png"} />
        </p>
      </header>
    </div>
  );
}

export default App;
