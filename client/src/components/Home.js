import Carousel from "../elements/Carousel";
import '../css/Home.css'


export default function Home() {

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      console.log("scroll");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log(document.documentElement.scrollTop);
        document.getElementById("navbar-m").style.transform = "translateY(0)";
        console.log(document.getElementById("navbar-m"));
    } else {
        document.getElementById("navbar-m").style.transform = "translateY(-5rem)";
    }
    }

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
