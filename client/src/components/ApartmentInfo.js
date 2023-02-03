import "../css/ApartmentInfo.css";
import Navbar2 from "../elements/Navbar2";
import { FaWhatsapp } from "react-icons/fa";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ApartmentInfo() {
  const [profiledata, setProfiledata] = useState();

  const accessId = localStorage.getItem("token");
  const mateList = async (req, res) => {
    const result = await axios.get(
      `https://flatmate.pythonanywhere.com/roomie/house/1/`,
      {
        headers: {
          Authorization: `Bearer ${accessId}`,
        },
      }
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                {profiledata.data.owner_name}
              </h1>
              <div className="leading-relaxed">
                {profiledata.data.description} Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Provident labore dolorem
                voluptatibus, est amet iure in sint. Explicabo natus similique
                id dolorum odio, odit distinctio, harum, minus tempore at
                doloremque!
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {profiledata.data.bhk}
              </h2>
              <p className="leading-relaxed">Bedrooms</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {profiledata.data.property_age}
              </h2>
              <p className="leading-relaxed">Property Age</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {profiledata.data.rent}
              </h2>
              <p className="leading-relaxed">Rent</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              src={
                !`${profiledata.data.image}`
                  ? "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                  : `${profiledata.data.image}`
              }
              alt="Home"
            />
          </div>
        </div>
      </section>
    </>
  );
}
