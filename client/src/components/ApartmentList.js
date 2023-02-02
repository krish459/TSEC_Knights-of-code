import '../css/ApartmentList.css'
import ApartmentCard from '../elements/ApartmentCard'
import Filter from '../elements/Filter'

export default function ApartmentList(){
    return(
        <div className="apartmentList">
            <div className="intro-img-apt"></div>
            <Filter/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
            <ApartmentCard className="apt-card"/>
        </div>
    )
}