import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Soumyajit-Behera.pdf";
import {AiOutlineDownload} from "react-icons/ai";

function Resume() {
    const uri = "https://ranks/getRanks";
    const [farhanRank, upadtefarhanRank] = useState(0);
    const [hackerrank, upadteHackerank] = useState(0);
    const [sem, upadateSem] = useState(0);
    const [cgpa, upadteCgpa] = useState(0);

    useEffect(() => {
        axios
            .get(uri)
            .then((res) => {
                upadtefarhanRank(res.data.message[0].farhanRank);
                upadteHackerank(res.data.message[1].hackerrank);
                upadteCgpa(res.data.message[2].cgpa);
                upadateSem(res.data.message[3].sem);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container fluid className="resume-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary"
                        href="https://www.linkedin.com/in/farhan-saqib-%E2%9C%94-444203117/"
                        // href={pdf}
                            target="_blank">
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Col md={6} className="resume-left">
                        <h3 className="resume-title">Experience</h3>
                        <Resumecontent
                            title="Frontend Developer [ Cheetay ]"
                            date="Dec 2021 - ..."
                            content={[
                                "Front End Developer.",
                                "Technologies and FrameWorks [ MERN Stack ]",
                                "https://www.cheetay.pk/",
                            ]}
                        />
                        <Resumecontent
                            title="Frontend Developer [ Exponento Pvt ]"
                            date="Dec 2020 - Nov 2021"
                            content={[
                                "Front End Developer.",
                                "Technologies and FrameWorks [ HTML, SCSS, Bootstrap, Material Design, ant Design, React JS ]",
                                "https://www.exponento.com/",
                            ]}
                        />
                        <Resumecontent
                            title="Frontend Developer [ Jobesk Pvt, Lahore ]"
                            date="Jan 2020 - Dec 2020"
                            content={[
                                " Worked as Front End Developer.",
                                "Technologies and FrameWorks [ HTML, SCSS, Bootstrap, Material Design, React JS ]"
                            ]}
                        />
                        <Resumecontent
                            title="UI Developer [ Quantum LHE Pvt, Lahore ]"
                            date="Feb 2017 - May 2019"
                            content={[
                                "I've stared my Front End Career from Quantum LHE, Pvt as a UI Developer. ",
                                "https://www.quantumcph.com/",
                            ]}
                        />


                        <h3 className="resume-title">Extracurricular Activities</h3>
                        <Resumecontent
                            title="Football/Ping-pong"
                            content={[
                                "I love to play football and table tennis "
                            ]}
                        />
                    </Col>
                    <Col md={6} className="resume-right">
                        <h3 className="resume-title">Education</h3>
                        <Resumecontent
                            title="BSCS [Virtual University, Pakistan] "
                            date="2017 to 21"
                            // content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
                            content={[`CGPA: 2.90`]}
                        />

                        {/*<h3 className="resume-title">Publications</h3>*/}
                        {/*<Resumecontent*/}
                        {/*    title=""*/}
                        {/*    content={[*/}
                        {/*        "Medium",*/}
                        {/*    ]}*/}
                        {/*/>*/}

                        {/*<h3 className="resume-title">Ranks and Achivements</h3>*/}
                        {/*<Resumecontent*/}
                        {/*    title=""*/}
                        {/*    content={[*/}
                        {/*        "Medium",*/}
                        {/*        // `Current rank in farhan ${farhanRank}`,*/}
                        {/*        // `Current rank in HackerRank  ${hackerrank}`,*/}
                        {/*        // "Top Performer in Code-Break 1.0",*/}
                        {/*        // "Participant in Hack-A-Bit 2019",*/}
                        {/*    ]}*/}
                        {/*/>*/}
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button variant="primary"
                        // href={pdf}
                        href="https://www.linkedin.com/in/farhan-saqib-%E2%9C%94-444203117/"
                            target="_blank">
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
