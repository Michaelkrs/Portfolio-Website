import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/promptopia.png")}
              carouselImages={[
                "Promptopia/1.png",
                "Promptopia/2.png",
                "Promptopia/3.png",
              ]}
              isBlog={false}
              title="Promptopia"
              description="User-friendly website that allows people to freely share various AI prompts, conveniently tag them for easy topic identification, and benefits from an intuitive interface along with a robust search feature to enhance the user experience."
              techStack="Next.js, Auth.js, MongoDB"
              ghLink="https://github.com/Michaelkrs/Promptopia"
              demoLink="https://promptopia.michaelkrs.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/cryptoverse.png")}
              carouselImages={[
                "Cryptoverse/1.png",
                "Cryptoverse/2.png",
                "Cryptoverse/3.png",
              ]}
              isBlog={false}
              title="Cryptoverse"
              description="Explore cryptocurrencies effortlessly on a modern website featuring a graphical interface designed to help users discover and learn about various digital assets."
              techStack="React, Redux Toolkit, Ant Design"
              ghLink="https://github.com/Michaelkrs/Cryptoverse"
              demoLink="https://cryptoverse.michaelkrs.dev"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/equiz.png")}
              carouselImages={["Equiz/1.png", "Equiz/2.png", "Equiz/3.png"]}
              isBlog={false}
              title="EQuiz+"
              description="Modern web-based test platform seamlessly integrates Text-to-Speech and Speech-to-Text features, ensuring inclusivity for all. With a user-friendly interface, it offers secure and accessible online assessments, showcasing the forefront of modern testing solutions."
              techStack="React, Redux, Express, PostgreSQL"
              ghLink="https://github.com/equiz-plus/equiz-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/rottenbananas.png")}
              carouselImages={[
                "RottenBananas/1.png",
                "RottenBananas/2.png",
                "RottenBananas/3.png",
              ]}
              isBlog={false}
              title="RottenBananas"
              description="Web-based movies and TV shows website with user and admin content management system. Discover reviews, ratings, details, casts, and recommendations for an immersive cinematic experience. Stay up-to-date with the latest releases and find new favorites."
              techStack="React, Redux, Express, PostgreSQL, GraphQL"
              ghLink="https://github.com/Michaelkrs/RottenBananas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/forum.png")}
              carouselImages={[
                "ForumWebsite/1.png",
                "ForumWebsite/2.png",
                "ForumWebsite/3.png",
              ]}
              isBlog={false}
              title="Forum Website"
              description="Dynamic forum website that offers an exciting space for users to share a diverse range of content, including texts, images, and Spotify songs. Through thoughtful and engaging comments, users can connect, collaborate, and learn from one another."
              techStack="Vue.js, Pinia, Express, PostgreSQL"
              ghLink="https://github.com/Michaelkrs/Forum-Website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
