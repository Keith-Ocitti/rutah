"use client";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import CenterHeader from "../components/centerHeader";
import "../styles/main.css";
import CarouselCom from "../components/Carousel";

const Engineering = () => {
  return (
    <>
      <Header />

      <CarouselCom />
      <br />
      <div className="body-container">
        <CenterHeader heading={"Engineering and Construction Services"} />
        <div className="content-holder">
          <Image
            src={"/arch.jpg"}
            height={260}
            width={380}
            alt="content img"
            priority
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Architectural consultancy</h4>
            <p>
              We organize spaces, design functional and aesthetically pleasing
              architectural master pieces. Our expertise stretches from
              residential houses to commercial houses and also institutional
              buildings like schools and churches. We also consider
              sustainability at the background of our architectural designs.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/land.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Landscape Designing</h4>
            <p>
              We design compounds around already designed architectural master
              pieces, we consider different hardscapes and greens capes. Our
              professional teams look at cost efficiency in our landscape
              designs and sustainability.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/int.webp"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Interior Designing</h4>
            <p>
              We also design the interior spaces of different types of buildings
              inclusive of residential homes and commercial spaces. We consider
              all design aspects to achieve maximum comfort and aesthetic
              beauty.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/farm.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Farm Designing</h4>
            <p>
              With our experience and exposure in farms and other agricultural
              spaces. We design different farm structures and greens capes
              within the farm.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/gend.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Master Planning</h4>
            <p>
              Here we look at Organizing spaces at a larger scale like a
              community or planning very huge chunks of land to provide road
              networks and demarcating different activities on the site.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/funi.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Special Furniture Designing</h4>
            <p>
              We also look at designing customized furniture to meet the needs
              of different home users and offices that are interested in
              uniqueness.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/aquaft.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Aquariums and Water Fountains Designing</h4>
            <p>
              Our expertise goes to the details of designing aquariums and water
              fountains. We also implement them on site according to the needs
              of the client.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/pool2.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Swimming pool Designing</h4>
            <p>
              We design different types of swimming pools and implement them
              through our partnerships with experts in pool construction.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Engineering;
