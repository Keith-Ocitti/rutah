import CenterHeader from "../components/centerHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

const QonectVisuals = () => {
  return (
    <>
      <Header />
      <br />
      <div
        className="qonect-logo-holder"
        style={{
          backgroundImage: `url("./visuals.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <Image
          src="/QONNECT1.png"
          width={500}
          height={280}
          alt="img1"
          style={{
            height: "120px",
          }}
          className="q-img"
        />
      </div>
      <div className="body-container">
        <CenterHeader heading="Work with us" />
        <div className="service-con">
          <Image
            src="/brand identity.png"
            width={200}
            height={280}
            alt="img1"
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
            style={{
              objectFit: "fill",
              marginTop: "20px",
            }}
            className="side-img"
          />
        </div>
        <CenterHeader heading="Sample Work" />
        <div className="sample-work">
          <Image
            src="/delta flyer.png"
            width={1100}
            height={890}
            className="larger-img"
            alt="sample"
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
      <Footer />
    </>
  );
};
export default QonectVisuals;
