import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFirebase,
  SiIntellijidea,
} from "react-icons/si";

const ToolIconWithTooltip = ({ icon, text }) => (
  <OverlayTrigger placement="bottom" overlay={<Tooltip>{text}</Tooltip>}>
    <Col xs={4} md={2} className="tech-icons">
      {icon}
    </Col>
  </OverlayTrigger>
);

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <ToolIconWithTooltip
        icon={<SiVisualstudiocode />}
        text="Visual Studio Code"
      />
      <ToolIconWithTooltip icon={<SiPostman />} text="Postman" />
      <ToolIconWithTooltip icon={<SiFirebase />} text="Firebase" />
      <ToolIconWithTooltip icon={<SiIntellijidea />} text="Intellij IDEA" />
    </Row>
  );
}

export default Toolstack;
