import React from "react";
import { Container } from "react-bootstrap";
import FooterLogo from "../assets/images/webp/FooterLogo.webp";
import { Facebook, Instagram, Twitter } from "./Icons";

const Footer = () => {
  return (
    <>
      <div className="bg-black pb-2">
        <Container className="pb-1">
          <div className="d-flex flex-xl-row flex-column justify-content-between align-items-center pb-4 mb-1 footer_spacing">
            <div className="pb-4 pb-xl-0">
              <a href="#">
                <img
                  src={FooterLogo}
                  alt="FooterLogo"
                  className="w-100 h-100 max_w_176"
                />
              </a>
            </div>
            <div className="pb-md-5 pb-4 pb-xl-0">
              <ul className="flex_flow_wrap justify-content-center list-unstyled d-flex gap_32 align-items-center mb-0">
                <li>
                  <a
                    className="text_off_white fs_6sm text-nowrap fw-medium lh_100 link_style position-relative"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text_off_white fs_6sm fw-medium text-nowrap lh_100 link_style position-relative"
                    href="#YourBenefits"
                  >
                    Your benefits
                  </a>
                </li>
                <li>
                  <a
                    className="text_off_white fs_6sm fw-medium text-nowrap lh_100 link_style position-relative"
                    href="#Ourprocess"
                  >
                    Our process
                  </a>
                </li>
                <li>
                  <a
                    className="text_off_white fs_6sm fw-medium text-nowrap lh_100 link_style position-relative"
                    href="#Ourworks"
                  >
                    Our works
                  </a>
                </li>
                <li>
                  <a
                    className="text_off_white fs_6sm fw-medium text-nowrap lh_100 link_style position-relative"
                    href="#Testimonials"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className="text_off_white fs_6sm fw-medium text-nowrap lh_100 link_style position-relative"
                    href="#StartProject"
                  >
                    Start a project
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <div className="social_icon pe-1 me-3">
                <Facebook />
              </div>
              <div className="social_icon pe-1 me-3">
                <Instagram />
              </div>
              <div className="social_icon">
                <Twitter />
              </div>
            </div>
          </div>
          <div className="border-bottom opacity_35"></div>
          <div className="mt-4 pt-md-1 d-sm-flex justify-content-between align-items-center pb-4">
            <p className="mb-0 text-white opacity_08 lh_167 fw-normal fs_5sm mb-sm-0 mb-2">
              Â© 2021 Company
            </p>
            <div className="d-flex gap-4">
              <p className="mb-0 lh_134 fs_5sm fw-normal text_off_white opacity_08">
                Privacy policy
              </p>
              <p className="mb-0 lh_134 fs_5sm fw-normal text_off_white opacity_08">
                Term of service
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
