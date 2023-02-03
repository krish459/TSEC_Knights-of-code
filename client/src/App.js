import "./App.css";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import PropertyPosting from "./components/PropertyPosting";
import Navbar from "./elements/Navbar";
import RoommateList from "./components/RoommateList";
import ApartmentList from "./components/ApartmentList";
// import AddressSelection from "./elements/AddressSelection";
import Login from "./components/Login";
import MyDetails from "./components/MyDetails";
import OtherDetails from "./components/OtherDetails";
import Footer from "./elements/Footer";
import ApartmentInfo from "./components/ApartmentInfo";

function App() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar-m").style.transform = "translateY(0)";
    } else {
      document.getElementById("navbar-m").style.transform = "translateY(-5rem)";
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/propertyposting" element={<PropertyPosting />} />
        <Route path="/mydetails" element={<MyDetails />} />
        <Route path="/findaroommate" element={<RoommateList />} />
        <Route path="/findanapartment" element={<ApartmentList />} />
        <Route path="/otherdetails" element={<OtherDetails />} />
        <Route path="/apartmentinfo/:id" element={<ApartmentInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
