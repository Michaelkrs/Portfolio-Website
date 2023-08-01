import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm <span className="purple">Michael Kristian</span>, Full Stack Web
            Developer
            <br />
            <br />
            Passionate <span className="purple">
              Full Stack Web Developer
            </span>{" "}
            with expertise in <span className="purple">Front-End</span> and
            <span className="purple"> Back-End</span> technologies. Graduated
            from a JavaScript bootcamp, showcasing a solid understanding of
            software development principles through successful project
            completion. Adept at creating innovative web development solutions
            with a diverse skill set and strong problem-solving abilities.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
