import "./App.css";
import CharactersList from "./components/CharactersList";
import { Routes, Route } from "react-router-dom";
import Character from "./components/Character";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:id" element={<Character />}></Route>
      </Routes>
    </div>
  );
}

export default App;
