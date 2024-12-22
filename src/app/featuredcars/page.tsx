"use client";

import "./page.css";
import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />

      <div></div>
      <div className="img-container">
        <div className="img-card">
          <span>Car 1</span>
          <Image src={car1} alt="Car 1" layout="intrinsic" />
        </div>
        <div className="img-card">
          <span>Car 2</span>
          <Image src={car2} alt="Car 2" layout="intrinsic" />
        </div>
        <div className="img-card">
          <span>Car 3</span>
          <Image src={car3} alt="Car 3" layout="intrinsic" />
        </div>
        <div className="img-card">
          <span>Car 4</span>
          <Image src={car4} alt="Car 4" layout="intrinsic" />
        </div>
      </div>
    </div>
  );
}
