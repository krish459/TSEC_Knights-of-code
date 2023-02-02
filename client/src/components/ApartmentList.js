import '../css/ApartmentList.css'
import ApartmentCard from '../elements/ApartmentCard'
import Filter from '../elements/Filter'

export default function ApartmentList(){
    return(
        <div className="apartmentList">
            <Filter/>
            <ApartmentCard/>
            <ApartmentCard/>
            <ApartmentCard/>
            <ApartmentCard/>
            <ApartmentCard/>
            <ApartmentCard/>
            <ApartmentCard/>
        </div>
    )
}