import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Business from "../assets/images/webp/business.webp";
import Sales from "../assets/images/webp/sales.webp";
import Expert from "../assets/images/webp/expert.webp";
import Research from "../assets/images/webp/research.webp";
import Audit from "../assets/images/webp/audit.webp";
import Tracking from "../assets/images/webp/tracking.webp";
import HalfCircleImg from "../assets/images/webp/half-circle-img.webp";
import TringleShapeImg from "../assets/images/webp/tringle_bg_shape.webp";

const Features = () => {
  const data = [
    {
      image: Business,
      title: "Grow your business",
      para: `<span class="fw-bold">The magic wand</span> for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.`,
    },
    {
      image: Sales,
      title: "Drive more sales",
      para: `A potential customer, once lost, is hard to retain back. But <span class="fw-bold text_black1 fs_6sm lh_150">keeping some critical</span> factors in mind, we can, for sure, use these loyalty programs as customer retention tools.`,
    },
    {
      image: Expert,
      title: "Handle by Expert",
      para: "We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively",
    },
    {
      image: Research,
      title: "UX Research",
      para: "UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.",
    },
    {
      image: Audit,
      title: "Business Audit",
      para: "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. ",
    },
    {
      image: Tracking,
      title: "Data tracking",
      para: "The hardware and software, which when used together allows you to know where something is at any point in time",
    },
  ];
  return (
    <>
      <div
        id="YourBenefits"
        className="position-relative feature_spacing bg_off_white z-0"
      >
        <img
          src={HalfCircleImg}
          alt="HalfCircleImg"
          className="bg_right_shape w-100 position-absolute end-0"
        />
        <img
          src={TringleShapeImg}
          alt="TringleShapeImg"
          className="w-100 position-absolute bg_left_shape start-0 bottom_4"
        />
        <Container className="custom_container position-relative z-1">
          <p
            className="text-uppercase fw-bold fs_2sm opacity_05 ls_18 lh_122 text_green mb-0 pb-4 text-lg-start text-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            features
          </p>
          <h2
            className="lh_122 fw-medium fs_8lg text_gray pb-4 mb-2 text_width mx-lg-0 mx-auto  text-lg-start text-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="linear"
          >
            We are here to help you with
          </h2>
          <Row>
            {data.map((a, index) => (
              <Col
                className="mb-4"
                lg={4}
                md={6}
                sm={6}
                key={index}
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
                <div className="feature_card bg-white cursor_pointer d-flex flex-column h-100 transition">
                  <img
                    src={a.image}
                    alt="image"
                    width="50px"
                    height="50px"
                    className="icon_shadow"
                  />
                  <div className="pt_20">
                    <h3 className="fs_2md fw-bold lh_136 text_gray mb-0 pb-3">
                      {a.title}
                    </h3>
                    <p
                      className=" mb-0 fs_6sm fw-normal text_slate1"
                      dangerouslySetInnerHTML={{ __html: a.para }}
                    ></p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Features;
