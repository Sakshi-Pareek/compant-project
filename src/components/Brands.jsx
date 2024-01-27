import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import MazdaImg from "../assets/images/webp/mazda.webp";
import Atlassian from "../assets/images/webp/atlassian.webp";
import Smashing from "../assets/images/webp/smashing.webp";
import Qantas from "../assets/images/webp/qantas.webp";
import BuySellAds from "../assets/images/webp/buysellads.webp";
import Nitro from "../assets/images/webp/nitro.webp";
import CssMania from "../assets/images/webp/cssmania.webp";
import PopSugar from "../assets/images/webp/popsugar.webp";
import TalentBin from "../assets/images/webp/talentbin.webp";
import Civicrm from "../assets/images/webp/civicrm.webp";

const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    rtl: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customslider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="brand_spacing bg_off_white" id="Testimonials">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center pb-md-4 mb-2">
            <p
              className="text-uppercase ls_18 lh_122 text_green opacity_05 text-center fw-bold fs_2sm m-0 pb-md-4 pb-2"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              BRANDS
            </p>
            <h2
              className="text-center lh_122 fw-medium fs_8lg max_w_895 text_gray"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              We work with thousands of the world’s leading brands
            </h2>
          </div>
          <div data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-easing="linear">
            <Slider {...customslider}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={MazdaImg}
                  alt="MazdaImg"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Atlassian}
                  alt="Atlassian"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Smashing}
                  alt="Smashing"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Qantas} alt="Qantas" className="max_w_144 w-100" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={BuySellAds}
                  alt="BuySellAds"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Smashing}
                  alt="Smashing"
                  className="w-100 max_w_144"
                />
              </div>
            </Slider>
          </div>
          <div className="pt-md-4 pt-3">
            <Slider {...settings}>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Nitro} alt="Nitro" className="max_w_144 w-100" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={CssMania}
                  alt="CssMania"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={PopSugar}
                  alt="PopSugar"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={TalentBin}
                  alt="TalentBin"
                  className="max_w_144 w-100"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Civicrm} alt="Civicrm" className="max_w_144 w-100" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={PopSugar}
                  alt="PopSugar"
                  className="max_w_144 w-100"
                />
              </div>
            </Slider>
          </div>
        <p className="text-center fs_6sm fw-normal lh_148 text_slate_4 max_w_381 mb-0 pt-lg-4 mt-3 mx-auto" data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-easing="linear">You're going to be in good company. We work with world's leading brands.</p>
        </Container>
      </div>
    </>
  );
};

export default Brands;
