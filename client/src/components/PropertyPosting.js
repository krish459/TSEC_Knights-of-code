import "../css/PropertyPosting.css";
import { useState } from "react";
import PropertyDetails from "../elements/PropertyDetails";
import AccomodationDetails from "../elements/AccomodationDetails";
import GalleryDetails from "../elements/GalleryDetails";
import Navbar2 from "../elements/Navbar2";

export default function PropertyPosting() {
  // document.getElementById("navbar-m").style.transform = "translateY(0rem)"
  const [page, setPage] = useState(0);

  let mainComponent;

  if (page === 0) {
    mainComponent = <PropertyDetails nextPage={nextPage} />;
  } else if (page === 1) {
    mainComponent = <AccomodationDetails nextPage={nextPage} />;
  } else if (page === 2) {
    mainComponent = <GalleryDetails />;
  }

  function nextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <Navbar2/>
      <div className="propertyPosting">
        <h1 className="h1style">Enter your details</h1>
        <div className="pp-container">
          
          <div className="sidebar">
            <ul className="field-class-list">
              <li className="field-classes underlined" onClick={(event) => {
                event.target.classList.toggle('underlined')
                setPage(0)}
                }>
                Property Details
              </li>
              <li className="field-classes" onClick={(event) => {
                event.target.classList.toggle('underlined')
                setPage(1)
                }}>
                Accomodation Details
              </li>
              <li className="field-classes" onClick={(event) => {
                event.target.classList.toggle('underlined')
                setPage(2)
                }}>
                Gallery Details
              </li>
            </ul>
          </div>
            {mainComponent}
        </div>
      </div>
    </>
  );
}
