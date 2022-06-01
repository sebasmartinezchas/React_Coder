import "./App.css";
import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
