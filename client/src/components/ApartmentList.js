import axios from "axios";
import { useEffect, useState } from "react";
import "../css/ApartmentList.css";
import ApartmentCard from "../elements/ApartmentCard";
import Filter from "../elements/Filter";
import Navbar2 from "../elements/Navbar2";
import Loading from "./Loading";

export default function ApartmentList() {
  const [profiledata, setProfiledata] = useState();
  const mateList = async () => {
    // const result = await axios.get(
    //   "https://flatmate.pythonanywhere.com/roomie/all-house/"
    // );
    // console.log(result);
    // setProfiledata(result);
  };
  useEffect(() => {
    mateList();
  }, []);

  // if (!profiledata) {
  //   return <Loading />;
  // }
  return (
    <>
      <Navbar2/>
      <div className="apartmentList">
        <div className="intro-img-apt"></div>
        <Filter />
        {/* {profiledata.data.map((data) => { 
          return <ApartmentCard className="apt-card" key={data.id} 
          
          />;
        })} */}
        <div className="two-columns">
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
          <ApartmentCard className="apt-card"/>
        </div>
      </div>
    </>
  );
}
