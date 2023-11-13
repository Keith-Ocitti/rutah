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
      <br />
      <div className="body-container">
        <CenterHeader heading="Training on Climate smart agriculture" />
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Training on Aqua ponics
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
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
                      aquaponics, a sustainable farming method that combines
                      aquaculture (raising fish) with hydroponics (growing
                      plants in water). The training covers the setup,
                      management, and maintenance of aquaponic systems.
                      Participants learn how to create a closed-loop ecosystem
                      where fish waste provides nutrients for plants, and plants
                      help purify the water for the fish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Growing,production and Management of Live stock Pasture
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
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
                    <h4>
                      Growing,production and Management of Live stock Pasture
                    </h4>
                    <p>
                      This service focuses on cultivating and managing pasture
                      areas specifically designed to feed and support livestock.
                      It covers various aspects such as selecting appropriate
                      pasture grass species, pasture management practices,
                      rotational grazing techniques, and methods to enhance the
                      quality and quantity of forage available to the livestock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Production of Organic Nutrients
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
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
                      This service involves the creation and production of
                      organic fertilizers or nutrients for agricultural
                      purposes. It encompasses the development and processing of
                      natural materials or compost to create nutrient-rich
                      products. These organic nutrients are aimed at enhancing
                      soil fertility, providing essential elements for plant
                      growth, and promoting sustainable agricultural practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <CenterHeader heading="Agronomy Services" />
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Crop Production and Management
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
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
                      This service involves overseeing the complete process of
                      growing crops, from land preparation to harvesting. It
                      covers selecting suitable crops, preparing the soil,
                      planting, nurturing, pest and disease control, and
                      harvesting. The management aspect focuses on optimizing
                      crop growth, ensuring quality yields, and employing
                      sustainable agricultural practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Construction of Greenhouses
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
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
                      This service entails building structures specifically
                      designed to cultivate plants in a controlled environment.
                      Greenhouses provide regulated conditions for optimal plant
                      growth, protecting crops from adverse weather conditions
                      and pests. They create a microclimate that allows for
                      extended growing seasons and improved crop quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                Nusery bed Management
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div class="accordion-body">
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
                      This service involves managing nursery beds for raising
                      young plants before transplanting them into the field. It
                      includes seed selection, germination, and the care and
                      nurturing of seedlings or young plants until they are
                      ready for transplantation. Proper nursery bed management
                      ensures healthy, well-developed plants for later growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
              >
                Irrigation system installation
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSeven"
            >
              <div class="accordion-body">
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
                      This service involves setting up irrigation systems for
                      efficient and controlled watering of crops. It includes
                      designing, installing, and maintaining irrigation systems
                      such as drip irrigation, sprinklers, or other water
                      delivery systems. Proper irrigation ensures the consistent
                      and adequate supply of water to crops, promoting healthy
                      growth and maximizing yields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <CenterHeader heading="Products" />
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingEight">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseEight"
              >
                Hydroponic Nutrients
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEight"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingEight"
            >
              <div class="accordion-body">
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
                      These are specially formulated nutrients designed for
                      plants grown in hydroponic systems. They consist of a
                      balanced blend of essential elements like nitrogen,
                      phosphorus, potassium, and various micro-nutrients
                      necessary for optimal plant growth. These nutrients are
                      dissolved in water and directly supplied to plants,
                      ensuring they receive the necessary nourishment for
                      healthy development in hydroponic environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingNine">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseNine"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseNine"
              >
                Barley seed and wheat seed
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseNine"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingNine"
            >
              <div class="accordion-body">
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
                    <h4>Barley seed and wheat seed</h4>
                    <p>
                      Barley seed refers to the seeds of the barley plant, a
                      cereal grain widely used for various purposes like animal
                      feed, brewing, and food. These seeds are sown to grow
                      barley plants. Weed seeds, on the other hand, are seeds of
                      undesirable plants that can potentially grow among
                      cultivated crops and cause harm. Weed seeds need to be
                      identified and removed to maintain the health and
                      productivity of the desired crop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTen"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTen"
              >
                Hydroponics Fodder production trays
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTen"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTen"
            >
              <div class="accordion-body">
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
                      These are trays specifically designed for hydroponic
                      fodder production. They provide a controlled environment
                      for sprouting grains, usually barley or other cereal
                      grains, for use as animal feed. These trays support the
                      growth of nutrient-rich fodder by supplying the seeds with
                      water and nutrients in a hydroponic system, enabling rapid
                      and efficient fodder production for livestock.
                    </p>
                  </div>
                </div>
              </div>
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

export default Agriculture;
