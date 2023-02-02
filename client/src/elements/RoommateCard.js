import '../css/RoommateCard.css'

export default function RoommateCard(){
    return(
        <div className="roommateCard">
            <div className="rm-info">
                <div className="rm-name">Arpita Sharma</div>
                <span className="rm-pronouns">She/Her</span>
                <div className="rm-occupation">Full Stack Developer</div>
                <span className="rm-smokes">Non-Smoker</span>
                <span className="rm-drinks">Non Drinker</span>
                <div className="rm-cooks">Knows how to cook</div>
                <span className="rm-job">Full time job</span>
                <span className="rm-pet">Owns a cat</span>
                <div className="rm-buttons">
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