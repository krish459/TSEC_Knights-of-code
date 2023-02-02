import '../css/RoommateCard.css'

export default function RoommateCard(){
    return(
        <div className="roommateCard">
            <div className="info">
                <div className="name">Arpita Sharma</div>
                <span className="pronouns">She/Her</span>
                <div className="occupation">Full Stack Developer</div>
                <span className="smokes">Non-Smoker</span>
                <span className="drinks">Non Drinker</span>
                <div className="cooks">Knows how to cook</div>
                <span className="job">Full time job</span>
                <span className="pet">Owns a cat</span>
                <div className="buttons">
                    <button className="roommateCard-btn">Yes</button>
                    <button className="roommateCard-btn">No</button>
                </div>
            </div>
            <div className="roommate-image">
                <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"/>
                <div className="compatability">67%</div>
            </div>
        </div>
    )
}