import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import DashBoard from "./Components/DashBoard/DashBoard";
import SideBar from "./Components/SideBar/SideBar";
import Films from "./Components/Films/Films";
import Planets from "./Components/Planets/Planets";
import Peoples from "./Components/Peoples/Peoples";
import Species from "./Components/Species/Species";
import Starships from "./Components/Starships/Starships";
import Vehicles from "./Components/Vehicles/Vehicles";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className="main-section">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<DashBoard />}></Route>
            <Route exact path="/films" element={<Films />}></Route>
            <Route exact path="/peoples" element={<Peoples />}></Route>
            <Route exact path="/planets" element={<Planets />}></Route>
            <Route exact path="/species" element={<Species />}></Route>
            <Route exact path="/starships" element={<Starships />}></Route>
            <Route exact path="/vehicles" element={<Vehicles />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
