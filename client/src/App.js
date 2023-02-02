import "./App.css";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
// import AddressSelection from "./elements/AddressSelection";
import Login from "./components/Login";
// import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/form" element={<Form />} /> */}
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <AddressSelection/> */}
    </div>
  );
}

export default App;
