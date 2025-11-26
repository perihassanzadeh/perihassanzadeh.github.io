import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
  DiLinux,
} from "react-icons/di";
import {
  SiArduino,
  SiCplusplus,
  SiAltiumdesigner,
  SiStmicroelectronics,
  SiC,
} from "react-icons/si";
import{
  CgAtlasian,
} from "react-icons/cg"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAltiumdesigner />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgAtlasian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStmicroelectronics />
      </Col>
    </Row>
  );
}

export default Techstack;
