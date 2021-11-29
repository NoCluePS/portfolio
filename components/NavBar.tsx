import React from "react";

import { isMobile } from "react-device-detect";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import NavbarDropdown from "react-navbar-dropdown";

type NavBarProps = {
  className: string;
};

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={className}>
      {!isMobile ? (
        <div className="flex gap-5 ">
          <a className="link" href="#about-me">
            About me
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#hello">
            Say hello!!
          </a>
        </div>
      ) : (
        <NavbarDropdown>
          <NavbarDropdown.Toggle className="menu__item">
            <NavbarDropdown.Open>
              <GoThreeBars size={35} />
            </NavbarDropdown.Open>
            <NavbarDropdown.Close>
              <FaTimes size={35} />
            </NavbarDropdown.Close>
          </NavbarDropdown.Toggle>
          <NavbarDropdown.CSSTransitionMenu
            className="dropdown-menu"
            classNames="dropdown-menu"
            timeout={200}
          >
            <NavbarDropdown.Item className="dropdown-menu-item">
              <div className="dropdown-menu-item__spacer" />
              <div className="dropdown-menu-item__text">
                <a className="link" href="#about-me">
                  About me
                </a>
              </div>
            </NavbarDropdown.Item>
            <NavbarDropdown.Item className="dropdown-menu-item">
              <div className="dropdown-menu-item__spacer" />
              <div className="dropdown-menu-item__text">
                <a className="link" href="#projects">
                  Projects
                </a>
              </div>
            </NavbarDropdown.Item>
            <NavbarDropdown.Item className="dropdown-menu-item">
              <div className="dropdown-menu-item__spacer" />
              <div className="dropdown-menu-item__text">
                <a href="#contact" className="link text-md">
                  Say hi!!
                </a>
              </div>
            </NavbarDropdown.Item>
          </NavbarDropdown.CSSTransitionMenu>
        </NavbarDropdown>
      )}

      <div className="flex flex-row gap-5">
        <a
          className="link"
          href="https://github.com/NoCluePS"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={35} />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/pijus-serapinas-b3724220a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          className="link"
          href="https://www.facebook.com/pijus.serapinas.52"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size={35} />
        </a>
        <a
          className="link"
          href="https://ko-fi.com/psorigins"
          target="_blank"
          rel="noreferrer"
        >
          <FaMoneyBillAlt size={35} />
        </a>
      </div>
    </div>
  );
};
