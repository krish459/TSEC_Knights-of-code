import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
