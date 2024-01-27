import React from "react";
import DottedImg from "../assets/images/webp/dotted_img.png";
import BusinessAudit from "../assets/images/webp/business-audit-img.webp";
import DataTracking from "../assets/images/webp/data-tracking.webp";
import ResultImg from "../assets/images/webp/result.webp";
import { Container, Row, Col } from "react-bootstrap";
import { AuditBusiness, DataSvg, ResultsSvg } from "./Icons";

const Proccess = () => {
  return (
    <>
      <div className="overflow-hidden position-relative" id="Ourprocess">
        <div className="process_gradient process_spacing">
          <div className="position-relative z-2" id="Ourworks">
            <h1
              className="text-white opacity_05 text-uppercase text-center ls_18 lh_122 fw-bold fs_2sm mb-3 px-md-0 px-2"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              how it works
            </h1>
            <h2
              className="text-white text-center fw-medium lh_122 fs_8lg mb-4 px-md-0 px-2"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              Our Process
            </h2>
            <p
              className="text-white mx-auto text-center fs_md fw-normal lh_170 max_w_718 mb-4 pb-lg-2 px-md-0 px-2"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="linear"
            >
              We know the best solution for all of your business ideas and we
              can help you solve all business problems
            </p>
            <Container className="custom_container position-relative z-2">
              <img
                src={DottedImg}
                alt="DottedImg"
                className="position-absolute start-50 dottedimg z-0"
              />
              <Row
                className="process_card bg-white w-100 mb_40 mx-auto p-lg-0 p-2 position-relative z-1 cursor_pointer"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
                <Col lg={6} className="col-12">
                  <img
                    src={BusinessAudit}
                    alt="Business"
                    className="w-100 max_h_323"
                  />
                </Col>
                <Col
                  lg={6}
                  className="col-12 d-flex align-items-center justify-content-center flex-column pb-lg-0 pb-4"
                >
                  <div>
                    <AuditBusiness />
                    <p className="text_gray fs_2md fw-bold lh_136 pt-lg-1 mt-3 mb-0">
                      Business Audit
                    </p>
                    <p className="fs_6sm fw-normal lh_150 m-0 text_slate1 pt-sm-3 pt-2">
                      An audit examines your business's financial records to
                      verify they are accurate. This is done through a
                    </p>
                  </div>
                </Col>
              </Row>
              <Row
                className="process_card bg-white w-100 mb_40 mx-auto p-lg-0 p-2 position-relative z-1 cursor_pointer"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
                <Col lg={6} className="col-12">
                  <img
                    src={DataTracking}
                    alt="Datatracking"
                    className="w-100 max_h_323"
                  />
                </Col>
                <Col
                  lg={6}
                  className="col-12 d-flex align-items-center justify-content-center flex-column pb-lg-0 pb-4"
                >
                  <div>
                    <DataSvg />
                    <p className="text_gray fs_2md fw-bold lh_136 mb-0 pt-lg-1 mt-3">
                      Data tracking
                    </p>
                    <p className="fs_6sm fw-normal lh_150 m-0 text_slate1 pt-sm-3 pt-2 max_w_718 pe-xl-5 me-xl-5">
                      The hardware and software, which when used together allows
                      you to know where something is at any point in time
                    </p>
                  </div>
                </Col>
              </Row>
              <Row
                className="process_card bg-white w-100 mx-auto p-lg-0 p-2 position-relative z-1 cursor_pointer"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
                <Col lg={6} className="col-12">
                  <img
                    src={ResultImg}
                    alt="Result"
                    className="w-100 max_h_323"
                  />
                </Col>
                <Col
                  lg={6}
                  className="col-12 d-flex align-items-center justify-content-center flex-column pb-lg-0 pb-4"
                >
                  <div>
                    <ResultsSvg />
                    <p className="text_gray fs_2md fw-bold lh_136 mb-0 pt-lg-1 mt-3">
                      Results
                    </p>
                    <p className="fs_6sm fw-normal lh_150 m-0 text_slate1 pt-sm-3 pt-2">
                      An audit examines your business's financial records to
                      verify they are accurate. This is done through a
                      systematic review of your transactions.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proccess;
