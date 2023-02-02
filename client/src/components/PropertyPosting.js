import '../css/PropertyPosting.css'
import { useState } from 'react';
import PropertyDetails from "../elements/PropertyDetails";
import AccomodationDetails from "../elements/AccomodationDetails";
import GalleryDetails from "../elements/GalleryDetails";

export default function PropertyPosting(){

    document.getElementById("navbar-m").style.transform = "translateY(0rem)"
    const [page, setPage] = useState(0)

    let mainComponent
  
    if(page === 0){
      mainComponent = <PropertyDetails nextPage={nextPage}/>
    }else if(page === 1){
      mainComponent = <AccomodationDetails nextPage={nextPage}/>
    }else if(page === 2){
      mainComponent = <GalleryDetails/>
    }

    function nextPage() {
        setPage(prevPage => prevPage + 1)
    }


    return(
      <div className='propertyPosting'>
        <div className="pp-container">
            <div className="sidebar">
                <ul className='field-class-list'>
                    <li className="field-classes" onClick={()=> setPage(0)}>Property Details</li>
                    <li className="field-classes" onClick={()=> setPage(1)}>Accomodation Details</li>
                    <li className="field-classes" onClick={()=> setPage(2)}>Gallery Details</li>
                </ul>
            </div>
            {mainComponent}
        </div>
      </div>
    )
}