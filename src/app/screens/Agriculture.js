"use client";
import Header from "../components/header";
import Image from "next/image";
import "../styles/main.css";
import CenterHeader from "../components/centerHeader";
import Footer from "../components/footer";
import CarouselCom from "../components/Carousel";

const Agriculture = () => {
  return (
    <>
      <Header />
      <CarouselCom />
      <br />
      <div className="body-container">
        <CenterHeader heading="Training on Climate smart agriculture" />
        <div className="content-holder">
          <Image
            src={"/aqua.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Training on Aqua ponics</h4>
            <p>
              This service involves teaching individuals or groups about
              aquaponics, a sustainable farming method that combines aquaculture
              (raising fish) with hydroponics (growing plants in water). The
              training covers the setup, management, and maintenance of
              aquaponic systems. Participants learn how to create a closed-loop
              ecosystem where fish waste provides nutrients for plants, and
              plants help purify the water for the fish.
            </p>
          </div>
        </div>
        <div className="content-holder">
          <Image
            src={"/pasture.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Growing,production and Management of Live stock Pasture </h4>
            <p>
              This service focuses on cultivating and managing pasture areas
              specifically designed to feed and support livestock. It covers
              various aspects such as selecting appropriate pasture grass
              species, pasture management practices, rotational grazing
              techniques, and methods to enhance the quality and quantity of
              forage available to the livestock.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/nutrients.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Production of Organic Nutrients</h4>
            <p>
              This service involves the creation and production of organic
              fertilizers or nutrients for agricultural purposes. It encompasses
              the development and processing of natural materials or compost to
              create nutrient-rich products. These organic nutrients are aimed
              at enhancing soil fertility, providing essential elements for
              plant growth, and promoting sustainable agricultural practices.
            </p>
          </div>
        </div>
        <CenterHeader heading="Agronomy Services" />
        <div className="content-holder">
          <Image
            src={"/fa3.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Crop Production and Management</h4>
            <p>
              This service involves overseeing the complete process of growing
              crops, from land preparation to harvesting. It covers selecting
              suitable crops, preparing the soil, planting, nurturing, pest and
              disease control, and harvesting. The management aspect focuses on
              optimizing crop growth, ensuring quality yields, and employing
              sustainable agricultural practices.
            </p>
          </div>
        </div>
        <div className="content-holder">
          <Image
            src={"/fa4.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Construction of Greenhouses</h4>
            <p>
              This service entails building structures specifically designed to
              cultivate plants in a controlled environment. Greenhouses provide
              regulated conditions for optimal plant growth, protecting crops
              from adverse weather conditions and pests. They create a
              microclimate that allows for extended growing seasons and improved
              crop quality.
            </p>
          </div>
        </div>
        <div className="content-holder">
          <Image
            src={"/astronomy.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Nusery bed Management</h4>
            <p>
              This service involves managing nursery beds for raising young
              plants before transplanting them into the field. It includes seed
              selection, germination, and the care and nurturing of seedlings or
              young plants until they are ready for transplantation. Proper
              nursery bed management ensures healthy, well-developed plants for
              later growth.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/drip.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Irrigation system installation</h4>
            <p>
              This service involves setting up irrigation systems for efficient
              and controlled watering of crops. It includes designing,
              installing, and maintaining irrigation systems such as drip
              irrigation, sprinklers, or other water delivery systems. Proper
              irrigation ensures the consistent and adequate supply of water to
              crops, promoting healthy growth and maximizing yields.
            </p>
          </div>
        </div>

        <CenterHeader heading="Products" />

        <div className="content-holder">
          <Image
            src={"/hydro.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Hydroponic Nutrients</h4>
            <p>
              These are specially formulated nutrients designed for plants grown
              in hydroponic systems. They consist of a balanced blend of
              essential elements like nitrogen, phosphorus, potassium, and
              various micro-nutrients necessary for optimal plant growth. These
              nutrients are dissolved in water and directly supplied to plants,
              ensuring they receive the necessary nourishment for healthy
              development in hydroponic environments.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/barley.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Barley seed and weed seed</h4>
            <p>
              Barley seed refers to the seeds of the barley plant, a cereal
              grain widely used for various purposes like animal feed, brewing,
              and food. These seeds are sown to grow barley plants. Weed seeds,
              on the other hand, are seeds of undesirable plants that can
              potentially grow among cultivated crops and cause harm. Weed seeds
              need to be identified and removed to maintain the health and
              productivity of the desired crop.
            </p>
          </div>
        </div>

        <div className="content-holder">
          <Image
            src={"/tray.jpg"}
            height={260}
            width={380}
            alt="content img"
            style={{
              objectFit: "fill",
            }}
            className="img"
          />
          <div className="body-text">
            <h4>Hydroponics Fodder production trays</h4>
            <p>
              These are trays specifically designed for hydroponic fodder
              production. They provide a controlled environment for sprouting
              grains, usually barley or other cereal grains, for use as animal
              feed. These trays support the growth of nutrient-rich fodder by
              supplying the seeds with water and nutrients in a hydroponic
              system, enabling rapid and efficient fodder production for
              livestock.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agriculture;
