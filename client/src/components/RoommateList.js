import '../css/RoommateList.css'
import RoommateCard from '../elements/RoommateCard'

export default function RoommateList(){
    return(
        <div className="roommateList">
            <h1>Roomies</h1>
            <RoommateCard/>
        </div>
    )
}