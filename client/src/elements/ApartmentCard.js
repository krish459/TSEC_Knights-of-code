import "../css/ApartmentCard.css";

export default function RoommateCard() {
  return (
    <div className="apartmentCard">
      <div className="apt-info">
        <div className="apt-name">Arpita Sharma</div>
        <div className="apt-rent">Rent: 5000/-</div>
        <div className="apt-location">vile parle, Mumbai</div>
        <div className="apt-vacancy">Status: 2 vacant spots remaining</div>
      </div>
      <div className="apt-image">
        <img
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="lkkh"
        />
      </div>
    </div>
  );
}
