"use client";
import CarouselCom from "../components/Carousel";
import CenterHeader from "../components/centerHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

const QonectVisuals = () => {
  return (
    <>
      <br />

      <div className="body-container">
        <CenterHeader heading="Work with us" />
        <div className="service-con">
          <Image
            src="/brand identity.png"
            width={200}
            height={280}
            alt="img1"
            priority
            style={{
              objectFit: "fill",
              marginTop: "20px",
            }}
            className="side-img"
          />
          <Image
            src="/graphics.png"
            width={200}
            height={280}
            alt="img1"
            priority
            style={{
              objectFit: "fill",
              marginTop: "20px",
            }}
            className="mid-img"
          />
          <Image
            src="/BULK SMS.png"
            width={200}
            height={280}
            alt="img1"
            priority
            style={{
              objectFit: "fill",
              marginTop: "20px",
            }}
            className="side-img"
          />
        </div>
        <br />
        <CenterHeader heading="Sample Work" />
        <div className="sample-work">
          <Image
            src="/delta flyer.png"
            width={1100}
            height={890}
            className="larger-img"
            alt="sample"
            priority
          />
          <div className="grid">
            <Image
              src="/A4 FLYER.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
            <Image
              src="/CAFE AMOR FLYEE.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
            <Image
              src="/1.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
            <Image
              src="/2.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
            <Image
              src="/4.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
            <Image
              src="/6.png"
              width={500}
              height={490}
              className="grid-img"
              alt="sample"
            />
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
export default QonectVisuals;
