import '../css/ApartmentInfo.css'
import Navbar2 from '../elements/Navbar2'
import { FaWhatsapp } from "react-icons/fa";

export default function ApartmentInfo(){
    return(
        <>
        <Navbar2/>
        <div className="apartmentInfo">
            <div className="apartmentInfoCard">
                <div className="apt-info-general-dets">

                    <h1 className="apt-info-card-name">Arpita Apartments</h1>
                    <div className="apt-info-card-owner">
                        <span>Owner details:</span>
                        <span>Mr Tommy Shelby</span>
                    </div>
                    <div className="apt-info-total-occupancy">
                        <span>Total Occupancy:</span>
                        <span>4</span>
                    </div>
                    <div className="apt-info-available-occupancy">
                        <span>Available Occupancy:</span>
                        <span>2</span>
                    </div>
                    <div className="apt-info-rent">
                        <span>Rent:</span>
                        <span>30000</span>
                    </div>
                    <div className="apt-info-tenants-dets">
                        <div className="apt-info-tenants-dets-title">
                            Details of the Tenants:
                        </div>
                        <div className="apt-info-images">
                            <div className="apt-info-image1"></div>
                            <div className="apt-info-image2"></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="apt-info-apt-image"></div>
                    <a href="https:/wa.me/919082230267"><FaWhatsapp size={50}/></a>
                </div>
            </div>
        </div>
        </>
    )
}