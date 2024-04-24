import logo from "./logo.svg";
import "./App.css";
import EjercicioComponents from "./components/EjercicioComponents";

function App() {
  const fecha = new Date();
  const yearAct = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EjercicioComponents year={yearAct}></EjercicioComponents>
      </header>
    </div>
  );
}

export default App;
