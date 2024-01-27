import React, { useState } from "react";
import { Container } from "react-bootstrap";
import WebLogo from "../assets/images/webp/webLogo.webp";
import DashbordImg from "../assets/images/webp/desktop.webp";
import CommentCard from "../assets/images/webp/Nortification.webp";
import UxCard from "../assets/images/webp/uxCard.webp";
import GraphCard from "../assets/images/webp/graphImg.webp";

const HeaderSec = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg_off_white pb-5 position-relative z-1" id="Home">
        <div className="header_bg">
          <Container fluid className="px-xxl-5 py-4">
            <div className="d-flex justify-content-between align-items-center pt-lg-2">
              <a href="">
                <img
                  src={WebLogo}
                  alt="WebLogo"
                  className="w-100 max_w_259 logo_width"
                />
              </a>
              <ul
                className={`${
                  show ? "left_neg_100" : "start-0"
                } d-flex flex-xl-row flex-column list-unstyled gap-4 align-items-center justify-content-xl-between justify-content-center mb-0 pe-0 nav_bar transition`}
              >
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#Home"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Home
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#YourBenefits"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Your benefits
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#Ourprocess"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Our process
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#Ourworks"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Our works
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#Testimonials"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Testimonials
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="under_line position-relative"
                >
                  <a
                    href="#StartProject"
                    className="text-white fw-medium lh_100 fs_6sm link_style"
                  >
                    Start a project
                  </a>
                </li>
                <li
                  onClick={() => setShow(true)}
                  className="d-xl-none d-block"
                >
                  <a
                    href=""
                    className="common_btn fw-bold text-uppercase ls_28 lh_148 fs_4sm d-inline-block"
                  >
                    Get started
                  </a>
                </li>
              </ul>
              <a
                href=""
                className="common_btn fw-bold text-uppercase ls_28 lh_148 fs_4sm d-inline-block d-flex justify-content-center align-items-center d-xl-block d-none"
              >
                Get started
              </a>
              <div
                onClick={() => setShow(!show)}
                className={`${
                  show ? "" : "cross transition"
                } navline d-xl-none d-flex bg-transparent flex-column gap-2 justify-content-center align-items-center position-relative px-xl-0 px-4 top-0 z_4`}
              >
                <span className="crl_1 bg-white transition"></span>
                <span className="crl_2 bg-white transition"></span>
                <span className="crl_3 bg-white transition"></span>
              </div>
            </div>
          </Container>
          <Container className="d-flex flex-column align-items-center justify-content-center text-center pt-sm-2 custom_container">
            <h1
              className="mb-0 fs_8xl fw-medium lh_122 text-white pt-5 mt-md-5 px-2 z-1"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              A Digital Product Design Agency
            </h1>
            <p
              className="text-white opacity_08 fs_md fw-normal lh_174 mb-0 pt-2 px-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              We are Creative and Professional Digital Agency
            </p>
            <div
              className="pt-4 mt-3 position-relative z-2"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <a
                href=""
                className="common_btn fw-bold text-uppercase ls_28 lh_148 fs_4sm d-inline-block"
              >
                Get started
              </a>
            </div>
            <div className="bg_dashboard_img d-flex align-items-center position-relative justify-content-center px-xl-0 px-sm-5 px-4">
              <img
                src={DashbordImg}
                alt="DashbordImg"
                className="max_w_1044 w-100 dash_img"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-easing="linear"
              />
              <img
                src={CommentCard}
                alt="CommentCard"
                className="position-absolute comment_card w-100 updown_animation1"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              />
              <img
                src={UxCard}
                alt="UxCard"
                className="position-absolute ux_card w-100 updown_animation2"
                data-aos="zoom-in-up"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              />
              <img
                src={GraphCard}
                alt="GraphCard"
                className="position-absolute graphcard w-100 updown_animation3"
                data-aos="fade-rigth"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
