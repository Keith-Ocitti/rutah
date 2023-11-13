"use client";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import CenterHeader from "../components/centerHeader";
import CarouselCom from "../components/Carousel";

const Entertainment = () => {
  return (
    <>
      <br />
      <div className="body-container">
        <CenterHeader heading={"Entertainment Services"} />
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
                Artist Brand Management
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
                      In the dynamic world of entertainment, establishing a
                      strong brand for artists is pivotal. We do the profiling
                      of Artists, create an environment where they can easily
                      grow and keep interaction with their target audience, and
                      keep them on the front page of current events
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
                Music Distribution and promotion
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
                      The heartbeat of the entertainment industry is music, and
                      our company serves as a gateway for artists to reach a
                      wider audience. We offer comprehensive music distribution
                      and promotion services tailored to uplift and showcase the
                      diverse sounds of Ugandan talent. Our streamlined
                      distribution network ensures that the music reaches
                      various digital platforms and streaming services
                      worldwide.
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
                Events Management
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
                      We put together awesome events like parties and concerts.
                      We pick the right place, choose which musicians will
                      perform, and take care of all the planning. Our goal is to
                      make sure everyone has a great time and enjoys the music.
                      We want these events to be memorable and fun for both the
                      musicians and the people who come to see them.
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

export default Entertainment;
