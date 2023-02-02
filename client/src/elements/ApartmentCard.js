import '../css/ApartmentCard.css'

export default function RoommateCard(){
    return(
        <div className="apartmentCard">
            <div className="info">
                <div className="name">Arpita Sharma</div>
                <div className="rent">Rent: 5000/-</div>
                <div className="location">vile parle, Mumbai</div>
                <div className="vacancy">Status: 2 vacant spots remaining</div>
            </div>
            <div className="apartment-image">
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"/>
            </div>
        </div>
    )
}