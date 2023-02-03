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
    <>
      <Navbar2 />
      <div className="apartmentList">
        <div className="intro-img-apt"></div>
        <Filter />
        <div className="two-columns">
          {profiledata.data.map((data) => {
            return (
              <ApartmentCard
                className="apt-card"
                key={data.id}
                image={data.image}
                owner_name = {data.owner_name}
                address={data.address}
                area={data.area}
                bhk={data.bhk}
                city={data.city}
                country={data.country}
                description={data.description}
                flr_no={data.flr_no}
                property_age={data.property_age}
                rent={data.rent}
                state={data.state}
                user_details={data.user_details}
                id={data.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
