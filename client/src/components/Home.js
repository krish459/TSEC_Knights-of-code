import Carousel from "../elements/Carousel";
import "../css/Home.css";
import Navbar from "../elements/Navbar";
import { Budget } from "./Budged";
import { TasksProgress } from "./TasksProgress";
import { TotalProfit } from "./TotalProfit";
import { TotalCustomers } from "./TotalCustomers";

export default function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="hero">
          <div className="hero-text">
            <h1>Our Aim</h1>
            <p>Finding not only homes but even your homies!</p>
          </div>
        </div>
        <div className="home-container">
          <Carousel />
          <div className="flex flex-row gap-x-32 mx-auto w-83 justify-center h-30 ">
            <Budget />
            <TasksProgress />
            <TotalProfit />
            <TotalCustomers />
          </div>
        </div>
      </div>
    </>
  );
}
