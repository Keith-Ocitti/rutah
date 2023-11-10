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
      <br />
      <div className="body-container">
        <CenterHeader heading={"Engineering and Construction Services"} />
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
                Architectural consultancy
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
                      We organize spaces, design functional and aesthetically
                      pleasing architectural master pieces. Our expertise
                      stretches from residential houses to commercial houses and
                      also institutional buildings like schools and churches. We
                      also consider sustainability at the background of our
                      architectural designs.
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
                Landscape Designing
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
                      We design compounds around already designed architectural
                      master pieces, we consider different hardscapes and greens
                      capes. Our professional teams look at cost efficiency in
                      our landscape designs and sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Farm Designing
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
                      With our experience and exposure in farms and other
                      agricultural spaces. We design different farm structures
                      and greens capes within the farm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                Master Planning
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
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
                      community or planning very huge chunks of land to provide
                      road networks and demarcating different activities on the
                      site.
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
                Special Furniture Designing
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
                      We also look at designing customized furniture to meet the
                      needs of different home users and offices that are
                      interested in uniqueness.
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
                Aquariums and Water Fountains Designing
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
                      Our expertise goes to the details of designing aquariums
                      and water fountains. We also implement them on site
                      according to the needs of the client.
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
                Interior Designing
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
                      We also design the interior spaces of different types of
                      buildings inclusive of residential homes and commercial
                      spaces. We consider all design aspects to achieve maximum
                      comfort and aesthetic beauty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingEight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseEight"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEight"
              >
                Swimming pool Designing
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingEight"
            >
              <div class="accordion-body">
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
                      We design different types of swimming pools and implement
                      them through our partnerships with experts in pool
                      construction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Engineering;
