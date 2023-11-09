"use client";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/main.css";
import CarouselCom from "../components/Carousel";
import CenterHeader from "../components/centerHeader";
import Image from "next/image";

const Professionals = () => {
  return (
    <>
      <Header />
      <CarouselCom />
      <br />
      <div className="body-container">
        <CenterHeader heading="Our Professionals" />
        <div className="personal-container">
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/placeholder.webp"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Name</h4>
              <h6>Field of expertise</h6>
              <h6>Years of experience</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Professionals;
