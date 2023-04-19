import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Box8 from "../media/Box8.png";
import nordstrom from "../media/nordstrom.png";
import Youtube from "../media/Youtube.png";
import Movie from "../media/Movie.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";

const Experience = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container className="project">
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <Card.Img variant="top" src={Box8} />
                    <Card.Body>
                      <Card.Title align="center">PharmaEasy Clone</Card.Title>
                      <Card.Text>
                        <p align="center" color="red">
                          Pharmaeasy provides consumers with on-demand, home
                          delivered access to a wide range of prescription.
                        </p>
                        <h3>Tech stack:</h3>
                        <p>
                          <span>React | Nodejs |expressjs| mongodb</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </center>

                  <div>
                    <a
                      href="https://pharmeasy-clone-nem201.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Saraswati121/imported-existence-8823"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <Card.Img variant="top" src={nordstrom} />
                    <Card.Body>
                      <Card.Title align="center">BestBuy Clone</Card.Title>
                      <Card.Text>
                        <p align="center">
                          Shop Best Buy for electronics, computers, appliances,
                          cell phones, video games & more new tech.
                        </p>
                        <h3>Tech stack:</h3>
                        <p>
                          <span>
                            React| Typescript | Nodejs |expressjs| mongodb
                          </span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </center>

                  <div>
                    <a
                      href="https://best-buy-tawny.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/Dreamboy-26/Best-Buy"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <Card.Img variant="top" src={Movie} />
                    <Card.Body>
                      <Card.Title align="center">Certidigital</Card.Title>
                      <Card.Text>
                        <p align="center">
                          Admin will generates certificates for users and sends them to their emails
                          and student will view their certificates and can
                          share them on social media platforms.
                        </p>
                        <h3>Tech stack:</h3>
                        <p>
                          <span>React | Redux | Expressjs | Nodejs | MongoDB</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </center>

                  <div>
                    <a
                      href="https://clinquant-puppy-bbdc8d.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/masai-builds/Certidigital-fe"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12} className="dis">
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <Card.Img variant="top" src={Youtube} />
                    <Card.Body>
                      <Card.Title align="center">Placement Portal</Card.Title>
                      <Card.Text>
                        <p align="center">
                          We will
                          build an website where Placement team will bring
                          companies from different sources and update them on
                          the portal so that students can apply according to
                          their skill sets.
                        </p>
                        <h3>Tech stack:</h3>
                        <p>
                          <span>
                            React | Redux | Expressjs | Nodejs | MongoDB
                          </span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </center>

                  <div>
                    <a
                      href="https://masai-placement-portal.netlify.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/masai-builds/team7-fe"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>

          <br></br>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Experience;
