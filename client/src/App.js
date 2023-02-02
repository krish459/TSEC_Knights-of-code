import "./App.css";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import PropertyPosting from "./components/PropertyPosting";
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
        <Route path="/propertyposting" element={<PropertyPosting />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <AddressSelection/> */}
    </div>
  );
}

export default App;
