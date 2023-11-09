"use client";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import CenterHeader from "../components/centerHeader";
import CarouselCom from "../components/Carousel";

const Entertainment = () => {
  return (
    <>
      <Header />
      <CarouselCom />
      <br />
      <div className="body-container">
        <CenterHeader heading={"Entertainment Services"} />
        <div className="content-holder">
          <Image
            src={"/brand.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Artist Brand Management</h4>
            <p>
              In the dynamic world of entertainment, establishing a strong brand
              for artists is pivotal. We do the profiling of Artists, create an
              environment where they can easily grow and keep interaction with
              their target audience, and keep them on the front page of current
              events
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/dist.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Music Distribution and promotion</h4>
            <p>
              The heartbeat of the entertainment industry is music, and our
              company serves as a gateway for artists to reach a wider audience.
              We offer comprehensive music distribution and promotion services
              tailored to uplift and showcase the diverse sounds of Ugandan
              talent. Our streamlined distribution network ensures that the
              music reaches various digital platforms and streaming services
              worldwide.
            </p>
          </div>
        </div>
        <div className="content-holder">
          <Image
            src={"/events.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Events Management</h4>
            <p>
              We put together awesome events like parties and concerts. We pick
              the right place, choose which musicians will perform, and take
              care of all the planning. Our goal is to make sure everyone has a
              great time and enjoys the music. We want these events to be
              memorable and fun for both the musicians and the people who come
              to see them.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Entertainment;
