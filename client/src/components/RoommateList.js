import axios from "axios";
import { useEffect, useState } from "react";
import "../css/RoommateList.css";
import Filter from "../elements/Filter";
import RoommateCard from "../elements/RoommateCard";
import Loading from "./Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

import Slider from "react-slick";

export default function RoommateList() {

  const [profiledata, setProfiledata] = useState();
  const [imageIndex, setImageIndex] = useState(0);

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

<<<<<<< HEAD
=======
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <FontAwesomeIcon icon={faArrowRight} /> */}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {/* <FontAwesomeIcon icon = {faArrowLeft} /> */}
      </div>
    );
  };


  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 100,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };




>>>>>>> edae429 (Added Tinder like Property)
  return (
    <div className="roommateList">
      <Filter/>

      <Slider {...settings} className="rm-slider">
            {profiledata.data.map((data,idx) => (
          data.email !== localStorage.getItem("email") && (
            <RoommateCard
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
              key={data.id}
              food={data.food}
              gender={data.gender}
              smoke={data.smoker}
              drink={data.drinker}
              work={data.job}
              pet={data.pet}
              cook={data.cook}
              email={data.email}
            />
          )
            ))}
        </Slider>


      {/* {profiledata.data.map((data) => {
        return (
          data.email !== localStorage.getItem("email") &&
          data.city === localStorage.getItem("city") && (
            <RoommateCard
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
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
      })} */}
    </div>
  );
}
