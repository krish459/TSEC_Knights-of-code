import "./App.css";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import PropertyPosting from "./components/PropertyPosting"
import Navbar from "./elements/Navbar";
import RoommateList from "./components/RoommateList";
import ApartmentList from "./components/ApartmentList";
// import AddressSelection from "./elements/AddressSelection";
import Login from "./components/Login";
import PropertyList from "./components/PropertyList";
import MyDetails from "./components/MyDetails";
// import Form from "./components/Form";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/propertyposting" element={<PropertyPosting />} />
        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/mydetails" element={<MyDetails />} />
        <Route path="/findaroommate" element={<RoommateList />} />
        <Route path="/findanapartment" element={<ApartmentList />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <AddressSelection/> */}
    </div>
  );
}

export default App;
