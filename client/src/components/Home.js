import Carousel from "../elements/Carousel";
import '../css/Home.css'
import Navbar from "../elements/Navbar";


export default function Home() {

  return (
    <div className="home">
        <Navbar />
        <div className="hero">
            <div className="hero-text">             
                <h1>Our Aim</h1>
                <p>Finding not only homes but even your homies!</p>
            </div>
        </div>
        <Carousel />
    </div>
  );
}
