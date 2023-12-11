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
                src={"/rutah.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Uwizeye Seth Rutah</h4>
              <h5>Agriculturalist</h5>
              <h6>Team Leader</h6>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/onard.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Ainebyona Onard</h4>
              <h5>Creative Designer</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/katushabe.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Katushabe Racheal</h4>
              <h5>Plant Doctor</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/anold.png"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Atukwase Anold</h4>
              <h5>Digital Tech Support</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/scovia.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Komugisa Scovia</h4>
              <h5>Field Mentor</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/rodgers.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Ainembabazi Rodgers</h4>
              <h5>Agri Business Mentor</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/Denis.PNG"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Arinaitwe Dennis</h4>
              <h5>Business Coach</h5>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/didas.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h4>Turinamwe Didas</h4>
              <h5>Electrical Engineer</h5>
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
