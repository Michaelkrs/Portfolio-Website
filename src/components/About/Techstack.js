import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiRedux,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiHibernate,
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
      <TechIconWithTooltip icon={<DiJava />} text="Java" />
      <TechIconWithTooltip icon={<DiNodejs />} text="Node.js" />
      <TechIconWithTooltip icon={<SiExpress />} text="Express" />
      <TechIconWithTooltip icon={<SiSpring />} text="Spring" />
      <TechIconWithTooltip icon={<SiSpringboot />} text="Spring Boot" />
      <TechIconWithTooltip icon={<SiHibernate />} text="Hibernate" />
      <TechIconWithTooltip icon={<DiReact />} text="React" />
      <TechIconWithTooltip icon={<FaVuejs />} text="Vue.js" />
      <TechIconWithTooltip icon={<SiRedux />} text="Redux" />
      <TechIconWithTooltip icon={<SiNextdotjs />} text="Next.js" />
      <TechIconWithTooltip icon={<DiGit />} text="Git" />
      <TechIconWithTooltip icon={<SiPostgresql />} text="PostgreSQL" />
      <TechIconWithTooltip icon={<SiSequelize />} text="Sequelize" />
      <TechIconWithTooltip icon={<DiMongodb />} text="MongoDB" />
    </Row>
  );
}

export default Techstack;
