import Image from "next/image";
import Header from "../components/header";
import CenterHeader from "../components/centerHeader";
import "../styles/main.css";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div style={{ height: "500px" }}>
        <Image
          src="/img1.jpg"
          width={500}
          height={280}
          alt="img1"
          priority
          style={{
            objectFit: "fill",
            marginTop: "20px",
            height: "500px",
          }}
          className="caro-img"
        />
      </div>

      <div className="body-container">
        <CenterHeader heading="General Services" />
        <div className="body-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. A nibh scelerisque augue dui
            pellentesque proin. Purus nisl tellus id dignissim. Magnis quis
            aliquet phasellus nunc pellentesque metus lorem. Amet gravida nec
            feugiat ornare nulla ullamcorper. Vel nec at et lectus. Elementum
            auctor rhoncus mattis quam porta est lacus neque etiam. Facilisi
            cras rutrum nec duis bibendum. Lorem ipsum dolor sit amet
            consectetur. A nibh scelerisque augue dui pellentesque proin. Purus
            nisl tellus id dignissim. Magnis quis aliquet phasellus nunc
            pellentesque metus lorem. Amet gravida nec feugiat ornare nulla
            ullamcorper. Vel nec at et lectus. Elementum auctor rhoncus mattis
            quam porta est lacus neque etiam. Facilisi cras rutrum nec duis
            bibendum. Lorem ipsum dolor sit amet consectetur. A nibh scelerisque
            augue dui pellentesque phasellus nunc pellentesque metus lorem. Amet
            gravida nec etiam. Facilisi cras rutrum nec duis bibendum.
          </p>
        </div>

        <div>
          <CenterHeader heading="IT & Graphics Design" />
          <div className="content-holder">
            <Image
              src={"/img2.jpg"}
              height={260}
              width={380}
              alt="content img"
              style={{
                objectFit: "fill",
              }}
              className="img"
            />
            <div className="body-text">
              <p>
                Lorem ipsum dolor sit amet consectetur. A nibh scelerisque augue
                dui pellentesque proin. Purus nisl tellus id dignissim. Magnis
                quis aliquet phasellus nunc pellentesque metus lorem. Amet
                gravida nec feugiat ornare nulla ullamcorper. Vel nec at et
                lectus. Elementum auctor rhoncus mattis quam porta est lacus
                neque etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum
                dolor sit amet consectetur. A nibh scelerisque augue dui
                pellentesque proin. Purus nisl tellus id dignissim. Magnis quis
                aliquet phasellus nunc pellentesque metus lorem. Amet gravida
                nec feugiat ornare nulla ullamcorper. Vel nec at et lectus.
                Elementum auctor rhoncus mattis quam porta est lacus neque
                etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum dolor
                sit amet consectetur. A nibh scelerisque augue dui pellentesque
                phasellus nunc pellentesque metus lorem. Amet gravida nec etiam.
                Facilisi cras rutrum nec duis bibendum.
              </p>
            </div>
          </div>

          <CenterHeader heading="Entertainment" />

          <div className="content-holder">
            <Image
              src={"/img2.jpg"}
              height={260}
              width={380}
              alt="content img"
              style={{
                objectFit: "fill",
              }}
              className="img"
            />
            <div className="body-text">
              <p>
                Lorem ipsum dolor sit amet consectetur. A nibh scelerisque augue
                dui pellentesque proin. Purus nisl tellus id dignissim. Magnis
                quis aliquet phasellus nunc pellentesque metus lorem. Amet
                gravida nec feugiat ornare nulla ullamcorper. Vel nec at et
                lectus. Elementum auctor rhoncus mattis quam porta est lacus
                neque etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum
                dolor sit amet consectetur. A nibh scelerisque augue dui
                pellentesque proin. Purus nisl tellus id dignissim. Magnis quis
                aliquet phasellus nunc pellentesque metus lorem. Amet gravida
                nec feugiat ornare nulla ullamcorper. Vel nec at et lectus.
                Elementum auctor rhoncus mattis quam porta est lacus neque
                etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum dolor
                sit amet consectetur. A nibh scelerisque augue dui pellentesque
                phasellus nunc pellentesque metus lorem. Amet gravida nec etiam.
                Facilisi cras rutrum nec duis bibendum.
              </p>
            </div>
          </div>
          {/* <p className="service-title">Agriculture</p> */}
          <CenterHeader heading="Agriculture" />

          <div className="content-holder">
            <Image
              src={"/img2.jpg"}
              height={260}
              width={380}
              alt="content img"
              style={{
                objectFit: "fill",
              }}
              className="img"
            />
            <div className="body-text">
              <p>
                Lorem ipsum dolor sit amet consectetur. A nibh scelerisque augue
                dui pellentesque proin. Purus nisl tellus id dignissim. Magnis
                quis aliquet phasellus nunc pellentesque metus lorem. Amet
                gravida nec feugiat ornare nulla ullamcorper. Vel nec at et
                lectus. Elementum auctor rhoncus mattis quam porta est lacus
                neque etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum
                dolor sit amet consectetur. A nibh scelerisque augue dui
                pellentesque proin. Purus nisl tellus id dignissim. Magnis quis
                aliquet phasellus nunc pellentesque metus lorem. Amet gravida
                nec feugiat ornare nulla ullamcorper. Vel nec at et lectus.
                Elementum auctor rhoncus mattis quam porta est lacus neque
                etiam. Facilisi cras rutrum nec duis bibendum. Lorem ipsum dolor
                sit amet consectetur. A nibh scelerisque augue dui pellentesque
                phasellus nunc pellentesque metus lorem. Amet gravida nec etiam.
                Facilisi cras rutrum nec duis bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
