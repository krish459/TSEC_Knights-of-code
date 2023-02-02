import Carousel from "../elements/Carousel";
import '../css/Home.css'


export default function Home() {

  return (
    <div className="home">
        <div className="hero">
            <div className="hero-text">             
                <h1>Our Aim</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione voluptates a neque eius at? Assumenda veritatis dignissimo</p>
            </div>
        </div>
        <Carousel />
    </div>
  );
}
