import '../css/Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <div className="upperFooter">
                <div className="column1">
                    <div className="help">
                        <h4 className="help-title">Help</h4>
                        <ul className="help-list">
                            <li className="help-list-items">Help Center</li>
                            <li className="help-list-items">Help Forum</li>
                            <li className="help-list-items">Watch Tutorial</li>
                        </ul>
                    </div>

                    <div className="community">
                        <h4 className="community-title">Community</h4>
                        <ul className="community-list">
                            <li className="community-list-items">Blogger Buzz</li>
                        </ul>
                    </div>

                    <div className="developer">
                        <h4 className="developers-title">Developers</h4>
                        <ul className="developers-list">
                            <li className="developer-list-items">Blogger API</li>
                            <li className="developer-list-items">Developer Forum</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-line"></div>
            <div className="lowerFooter">
                <div className="terms">Terms and Conditions</div>
                <div className="privacy">Privacy</div>
                <div className="policy">Content Policy</div>
            </div>
        </div>
    )
}