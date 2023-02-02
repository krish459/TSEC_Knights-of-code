import axios from "axios";
import { useEffect, useState } from "react";
import "../css/ApartmentList.css";
import ApartmentCard from "../elements/ApartmentCard";
import Filter from "../elements/Filter";
import Loading from "./Loading";

export default function ApartmentList() {
  const [profiledata, setProfiledata] = useState();
  const mateList = async () => {
    const result = await axios.get(
      "https://flatmate.pythonanywhere.com/roomie/all-house/"
    );
    console.log(result);
    setProfiledata(result);
  };
  useEffect(() => {
    mateList();
  }, []);

  if (!profiledata) {
    return <Loading />;
  }
  return (
    <div className="apartmentList">
      <div className="intro-img-apt"></div>
      <Filter />
      {profiledata.data.map((data) => { 
        return <ApartmentCard className="apt-card" key={data.id} 
        
        />;
      })}
    </div>
  );
}
