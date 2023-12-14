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
              <h5>Uwizeye Seth Rutah</h5>
              <div className="tag-cover">
                <button className="tag">Agriculturalist</button>
                <br />
                <button className="tag">Team Leader</button>
              </div>
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
              <h5>Ainebyona Onard</h5>
              <button className="tag">Creative Designer</button>
            </div>
          </div>
          <div className="person-card">
            <div className="person-img">
              <Image
                src={"/joan.jpg"}
                alt="placeholder"
                height={200}
                width={250}
                className="profile-img"
              />
            </div>
            <div className="person-info">
              <h5>Joan Atukunda</h5>
              <button className="tag">Graphics Designer</button>
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
              <h5>Katushabe Racheal</h5>
              <button className="tag">Plant Doctor</button>
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
              <h5>Atukwase Anold</h5>
              <button className="tag">Digital Tech Support</button>
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
              <h5>Komugisa Scovia</h5>
              <button className="tag">Field Mentor</button>
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
              <h5>Ainembabazi Rodgers</h5>
              <button className="tag">Agri-Business Mentor</button>
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
              <h5>Arinaitwe Dennis</h5>
              <button className="tag">Business Coach</button>
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
              <h5>Turinamwe Didas</h5>
              <button className="tag">Electrical Engineer</button>
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
