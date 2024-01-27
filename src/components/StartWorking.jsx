import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Startworking from "../assets/images/webp/working-img.webp";
import Vector from "../assets/images/webp/Vector.webp";

const StartWorking = () => {
  return (
    <>
      <div className="start_spacing working_gradient" id="StartProject">
        <Container className="custom_container text-lg-start text-center">
          <Row className="align-items-center">
            <Col lg={5} xs={12} className="mb-lg-0 mb-md-5 pb-4 position-relative z-2"data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="linear">
              <h1 className="text-white opacity_05 fs_2sm fw-bold ls_122 ls_18 text-uppercase mb-lg-4 mb-3">
                start with us
              </h1>
              <h2 className="text-white fs_8lg fw-medium lh_122 pe-lg-5 me-lg-5 mb-4">
                Start working faster today
              </h2>
              <p className="text-white fs_md fw-normal lh_170 mb-4 pb-lg-2 pe-lg-5 me-lg-4">
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>
              <a
                href=""
                className="common_btn fw-bold text-uppercase ls_28 lh_148 fs_4sm d-inline-block"
              >
                Get started
              </a>
            </Col>
            <Col lg={7} xs={12} className="position-relative" data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-easing="linear">
              <img
                src={Vector}
                alt="Vector"
                className="position-absolute z-0 w-100 vector_img"
              />
              <img
                src={Startworking}
                alt="StartWorking"
                className="w-100 max_w_624 position-relative z-1"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default StartWorking;
