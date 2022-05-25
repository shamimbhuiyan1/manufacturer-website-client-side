import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./Shared/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </div>
  );
}

export default App;
