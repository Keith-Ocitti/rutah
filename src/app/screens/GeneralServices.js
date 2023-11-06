import CenterHeader from "../components/centerHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import "../styles/main.css";
const GeneralServices = () => {
  return (
    <>
      <Header />
      <div>
        <Image
          src="/img1.jpg"
          width={500}
          height={280}
          alt="img1"
          priority
          style={{
            objectFit: "fill",
            marginTop: "20px",
          }}
          className="caro-img"
        />
      </div>
      <div className="body-container">
        <CenterHeader heading="General services" />
        <div className="gen-service">
          <ul>
            <div className="list-con">
              <div className="card-head">
                <li>Computer Accounting and Training</li>
              </div>
              <p>Offering accounting services using computer software.</p>
              <p>
                Training individuals or businesses on how to use accounting
                software effectively.
              </p>
            </div>
            <div className="list-con">
              <div className="card-head">
                <li>Evaluation of Business fund</li>
              </div>
              <p>
                Assessing and analyzing the financial resources of a business.
              </p>
              <p>
                Providing insights and recommendations on how to manage and
                allocate funds efficiently.
              </p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>Tax Advice</li>
              </div>
              <p>
                Offering guidance on tax-related matters to individuals or
                businesses.
              </p>
              <p>
                Providing strategies to minimize tax liabilities and maximize
                returns.
              </p>
            </div>
            <div className="list-con">
              <div className="card-head">
                <li>NSSF returns and registration</li>
              </div>
              <p>
                Handling registration processes for the National Social Security
                Fund (NSSF) in Uganda.
              </p>
              <p>Managing and filing returns related to NSSF for businesses.</p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>URA returns and registration</li>
              </div>
              <p>
                Assisting in registration procedures with the Uganda Revenue
                Authority (URA).
              </p>
              <p>
                Managing and filing tax returns in compliance with URA
                regulations.
              </p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>TIN registration</li>
              </div>
              <p>
                Assisting in obtaining Tax Identification Numbers (TIN) for
                individuals or businesses.
              </p>
              <p>
                Guiding through the registration process required by URA for tax
                purposes.
              </p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>Travel Documents</li>
              </div>
              <p>
                Facilitating the application or renewal of travel-related
                documents like passports or visas.
              </p>
              <p>
                Assisting in obtaining necessary paperwork for travel purposes.
              </p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>Property Consultancy</li>
              </div>
              <p>
                Providing advice and guidance on real estate matters and
                Offering expertise in property investment, sales, or management.
              </p>
            </div>

            <div className="list-con">
              <div className="card-head">
                <li>Insurance Agency</li>
              </div>
              <p>
                Offering insurance services, including advising on suitable
                insurance coverage.
              </p>
              <p>
                Assisting in the acquisition of insurance policies and handling
                related documentation.
              </p>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GeneralServices;
