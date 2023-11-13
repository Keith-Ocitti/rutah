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
      <br />
      <div className="body-container">
        <CenterHeader heading="Our Professionals" join={true} />
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
      <div className="join-us">
        <p>Want to join the team?</p>
        <a href="https://forms.gle/SSvnFH7kv3MVv8WK6" target="_blank">
          <button className="join-us-btn"> Join Us</button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Professionals;
