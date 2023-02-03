import "../css/ApartmentCard.css";
// import ApartmentInfo from "../components/ApartmentInfo"
import { NavLink } from "react-router-dom";

export default function RoommateCard({
  address,
  area,
  bhk,
  city,
  country,
  description,
  flr_no,
  property_age,
  image,
  owner_name,
  rent,
  state,
  id,
  user_details,
}) {
  return (
    <div className="apartmentCard">
      <div className="apt-info">
        <div className="apt-name">{owner_name}</div>
        <div className="apt-rent">Rent: {rent}</div>
        <div className="apt-location">{address}</div>
        <div className="apt-vacancy">Status: 2 vacant spots remaining</div>
        <button>
          {localStorage.getItem("token") ? (
            <NavLink to={`/apartmentInfo/${id}`}>View More</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </button>
      </div>
      <div className="apt-image">
        <img
          src={
            !`https://flatmate.pythonanywhere.com${image}`
              ? "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
              : `https://flatmate.pythonanywhere.com${image}`
          }
          alt="Home"
        />
      </div>
    </div>
  );
}
