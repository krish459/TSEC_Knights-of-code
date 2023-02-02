import '../css/ApartmentList.css'
import ApartmentCard from '../elements/ApartmentCard'

export default function ApartmentList(){
    return(
        <div className="apartmentList">
            <h1>Apartment List</h1>
            <ApartmentCard/>
        </div>
    )
}