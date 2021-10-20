import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import keeviPlaceholder from "../../Assets/Projects/keeviPlaceholder.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import vidproposalsProfile from "../../Assets/Projects/vidproposalsProfile.png";
import salamPlanet from "../../Assets/Projects/Salamplanet.jpg";
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
              imgPath={salamPlanet}
              isBlog={false}
              title="Salam Planet (D2)"
              description="Salam Planet was the leading Lifestyle and marketplace app for Muslims around the globe. To keep you informed and engaged, updated and connected, we simplify the process and bring all your lifestyle needs under one roof. "
              link="https://www.myd2app.com/salamplanet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeviPlaceholder}
              isBlog={false}
              title="Keevi"
              description="Create professional looking videos in 1 minute for your social media, website, and blog. Repurpose your content in many different formats with Keevi"
              link="https://keevi.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vidproposalsProfile}
              isBlog={false}
              title="VidProposals"
              description={[
                `Start creating video proposals  ........     
                Send video proposals and close deals faster ........  
                Send a video along with your Proposals for signature........  
                Send a personalized message with your proposal........  
                Convert your demo into a video proposal to close deals faster........  
                Stand out from your competitors.`
              ]}
              link="https://vidproposals.com/"
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={bitsOfCode}*/}
          {/*    isBlog={false}*/}
          {/*    title="Bits-0f-C0de"*/}
          {/*    description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."*/}
          {/*    link=""*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    link=""*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    link=""*/}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
