import axios from "axios";
import { useEffect, useState } from "react";
import "../css/RoommateList.css";
import RoommateCard from "../elements/RoommateCard";
import Loading from "./Loading";

export default function RoommateList() {
  const [profiledata, setProfiledata] = useState();
  const mateList = async () => {
    const result = await axios.get(
      "https://flatmate.pythonanywhere.com/roomie/all-wia/"
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
    <div className="roommateList">
      <h1>Roomies</h1>
      {profiledata.data.map((data) => {
        return (
          data.email !== localStorage.getItem("email") &&
          data.city === localStorage.getItem("city") && (
            <RoommateCard
              key={data.id}
              food={data.food}
              gender={data.gender}
              smoke={data.smoker}
              drink={data.drinker}
              work={data.job}
              pet={data.pet}
              cook={data.cook}
              email={data.email}
              city={data.city}
            />
          )
        );
      })}
    </div>
  );
}
