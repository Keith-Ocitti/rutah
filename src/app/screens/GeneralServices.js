"use client";
import CenterHeader from "../components/centerHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import "../styles/main.css";
import CarouselCom from "../components/Carousel";

const GeneralServices = () => {
  return (
    <div>
      <br />

      <div className="body-container">
        <CenterHeader heading="General services" />
        <div>
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
                  Computer Accounting and Training
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
                      src={"/accounting.png"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Computer Accounting and Training</h4>
                      <p>
                        Offering accounting services using computer software.
                      </p>
                      <p>
                        Training individuals or businesses on how to use
                        accounting software effectively.
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
                  Evaluation of Business fund
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
                      src={"/businessfund.webp"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Evaluation of Business fund</h4>
                      <p>
                        Assessing and analyzing the financial resources of a
                        business.
                      </p>
                      <p>
                        Providing insights and recommendations on how to manage
                        and allocate funds efficiently.
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
                  Tax Advice
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
                      src={"/tax-planning.jpg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Tax Advice</h4>
                      <p>
                        Offering guidance on tax-related matters to individuals
                        or businesses.
                      </p>
                      <p>
                        Providing strategies to minimize tax liabilities and
                        maximize returns.
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
                  Insurance Agency
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
                      src={"/insurance.png"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Insurance Agency</h4>
                      <p>
                        Offering insurance services, including advising on
                        suitable insurance coverage.
                      </p>
                      <p>
                        Assisting in the acquisition of insurance policies and
                        handling related documentation.
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
                  Property Consultancy
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
                      src={"/property.jpg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Property Consultancy</h4>
                      <p>
                        Providing advice and guidance on real estate matters and
                        Offering expertise in property investment, sales, or
                        management.
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
                  Travel Documents
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
                      src={"/travel.jpg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>Travel Documents</h4>
                      <p>
                        Facilitating the application or renewal of
                        travel-related documents like passports or visas.
                      </p>
                      <p>
                        Assisting in obtaining necessary paperwork for travel
                        purposes.
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
                  TIN registration
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
                      src={"/Tin-registration.jpg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>TIN registration</h4>
                      <p>
                        Assisting in obtaining Tax Identification Numbers (TIN)
                        for individuals or businesses.
                      </p>
                      <p>
                        Guiding through the registration process required by URA
                        for tax purposes.
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
                  URA returns and registration
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
                      src={"/URA.jpg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>URA returns and registration</h4>
                      <p>
                        Assisting in registration procedures with the Uganda
                        Revenue Authority (URA).
                      </p>
                      <p>
                        Managing and filing tax returns in compliance with URA
                        regulations.
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
                  NSSF returns and registration
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
                      src={"/NSSF.jpeg"}
                      height={260}
                      width={380}
                      alt="content img"
                      style={{
                        objectFit: "fill",
                      }}
                      className="img"
                    />
                    <div className="body-text">
                      <h4>NSSF returns and registration</h4>
                      <p>
                        Handling registration processes for the National Social
                        Security Fund (NSSF) in Uganda.
                      </p>
                      <p>
                        Managing and filling returns related to NSSF for
                        businesses.
                      </p>
                    </div>
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
    </div>
  );
};

export default GeneralServices;
