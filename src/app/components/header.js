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
  faMailBulk,
  faMailForward,
  faMessage,
  faPhone,
  faPhoneAlt,
  faPhoneSquare,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [toggleSideBar, setToggleSlideBar] = useState(false);
  const toggle = () => {
    setToggleSlideBar((prev) => !prev);
  };

  const Go = (destination) => {
    router.push(`${destination}`);
    setToggleSlideBar((prev) => !prev);
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
            <p onClick={() => router.push("/General")}>General Services</p>
            <p onClick={() => router.push("/Qonnect")}>IT & Graphics Design</p>
            <p onClick={() => router.push("/agriculture")}>Agriculture</p>
            <p onClick={() => router.push("/entertainment")}>Entertainment</p>
            <p onClick={() => router.push("/engineering")}>Engineering</p>
            <p>Professionals</p>
          </div>
        </div>
      </div>
      {toggleSideBar ? (
        <div className="ul-div">
          <ul className="nav-list">
            <li onClick={() => router.push("/General")}>General Services</li>
            <li onClick={() => router.push("/Qonnect")}>
              IT & Graphics Design
            </li>
            <li onClick={() => router.push("/agriculture")}>Agriculture</li>
            <li onClick={() => router.push("/entertainment")}>Entertainment</li>
            <li onClick={() => router.push("/engineering")}>Engineering</li>
            <li onClick={() => router.push("/engineering")}>Professionals</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
