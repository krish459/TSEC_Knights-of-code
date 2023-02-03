import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="column1">
          <div className="help">
            <h4 className="help-title">Roomies</h4>
            <ul className="help-list">
              <li className="help-list-items">
                <a href="/otherdetails">Find a Roomie</a>
              </li>
            </ul>
          </div>

          <div className="community">
            <h4 className="community-title">
              <a href="/">Homies</a>
            </h4>
            <ul className="community-list">
              <li className="community-list-items">
                Finding not only homes but even your homies!
              </li>
            </ul>
          </div>

          <div className="developer">
            <h4 className="developers-title">Properties</h4>
            <ul className="developers-list">
              <li className="developer-list-items">
                <a href="/findanapartment">Find a Home</a>
              </li>
              <li className="developer-list-items">
                <a href="/propertyposting">Post a Property</a>
              </li>
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
  );
}
