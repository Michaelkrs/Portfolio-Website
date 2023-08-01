import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiRedux,
  SiExpress,
} from "react-icons/si";

const TechIconWithTooltip = ({ icon, text }) => (
  <OverlayTrigger placement="bottom" overlay={<Tooltip>{text}</Tooltip>}>
    <Col xs={4} md={2} className="tech-icons">
      {icon}
    </Col>
  </OverlayTrigger>
);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <TechIconWithTooltip icon={<DiJavascript1 />} text="JavaScript" />
      <TechIconWithTooltip icon={<DiNodejs />} text="Node.js" />
      <TechIconWithTooltip icon={<DiReact />} text="React" />
      <TechIconWithTooltip icon={<FaVuejs />} text="Vue.js" />
      <TechIconWithTooltip icon={<SiRedux />} text="Redux" />
      <TechIconWithTooltip icon={<SiNextdotjs />} text="Next.js" />
      <TechIconWithTooltip icon={<DiGit />} text="Git" />
      <TechIconWithTooltip icon={<SiPostgresql />} text="PostgreSQL" />
      <TechIconWithTooltip icon={<SiSequelize />} text="Sequelize" />
      <TechIconWithTooltip icon={<DiMongodb />} text="MongoDB" />
      <TechIconWithTooltip icon={<SiExpress />} text="Express" />
    </Row>
  );
}

export default Techstack;
