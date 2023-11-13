"use client";
import "../styles/main.css";
import { useState } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [toggleSideBar, setToggleSlideBar] = useState(false);
  const [activeLink, setActiveLink] = useState({
    genServ: true,
    grapServ: false,
    agriServ: false,
    entServ: false,
    engServ: false,
    profServ: false,
  });
  const toggle = () => {
    setToggleSlideBar((prev) => !prev);
  };

  const Go = (destination) => {
    router.push(`${destination}`);
    setToggleSlideBar((prev) => !prev);
  };

  const linkObj = {
    genServ: false,
    grapServ: false,
    agriServ: false,
    entServ: false,
    engServ: false,
    profServ: false,
  };

  return (
    <div className="header-container">
      <div className="logo-holder">
        <button className="btn-logo">
          <Image
            src="/logo.png"
            width={120}
            height={60}
            alt="Ruta Logo"
            onClick={() => router.push("/")}
            className="homeBtn"
          />
        </button>
        <button className="phone">
          <FontAwesomeIcon icon={faPhoneSquare} className="nav-icon" />
          0771644933
          {/* <FontAwesomeIcon icon={faMessage} className="nav-icon" /> */}
        </button>
        <button onClick={toggle} className="sidebar-toggle-btn">
          {toggleSideBar ? (
            <FontAwesomeIcon icon={faClose} className="toggle-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="toggle-icon" />
          )}
        </button>
        <div className="desktop-nav">
          <div className="desk-nav-list">
            <p
              onClick={() => {
                router.push("/");
                setActiveLink((prev) => {
                  return { ...linkObj, genServ: true };
                });
              }}
              className={activeLink.genServ ? "active" : ""}
            >
              General Services
            </p>
            <p
              onClick={() => {
                router.push("/Qonnect");
                setActiveLink((prev) => {
                  return { ...linkObj, grapServ: true };
                });
              }}
              className={activeLink.grapServ ? "active" : ""}
            >
              IT & Graphics Design
            </p>
            <p
              onClick={() => {
                router.push("/agriculture");
                setActiveLink((prev) => {
                  return { ...linkObj, agriServ: true };
                });
              }}
              className={activeLink.agriServ ? "active" : ""}
            >
              Agriculture
            </p>
            <p
              onClick={() => {
                router.push("/entertainment");
                setActiveLink((prev) => {
                  return { ...linkObj, entServ: true };
                });
              }}
              className={activeLink.entServ ? "active" : ""}
            >
              Entertainment
            </p>
            <p
              onClick={() => {
                router.push("/engineering");
                setActiveLink((prev) => {
                  return { ...linkObj, engServ: true };
                });
              }}
              className={activeLink.engServ ? "active" : ""}
            >
              Engineering
            </p>
            <p
              onClick={() => {
                router.push("/Professionals");
                setActiveLink((prev) => {
                  return { ...linkObj, profServ: true };
                });
              }}
              className={activeLink.profServ ? "active" : ""}
            >
              Professionals
            </p>
          </div>
        </div>
      </div>
      {toggleSideBar ? (
        <div className="ul-div">
          <ul className="nav-list">
            <li onClick={() => Go("/")}>General Services</li>
            <li onClick={() => Go("/Qonnect")}>IT & Graphics Design</li>
            <li onClick={() => Go("/agriculture")}>Agriculture</li>
            <li onClick={() => Go("/entertainment")}>Entertainment</li>
            <li onClick={() => Go("/engineering")}>Engineering</li>
            <li onClick={() => Go("/Professionals")}>Professionals</li>
            <li>
              <a href="https://forms.gle/SSvnFH7kv3MVv8WK6" target="_blank">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
