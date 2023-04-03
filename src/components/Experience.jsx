import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Box8 from "../media/Box8.png";
import nordstrom from "../media/nordstrom.png";
import Youtube from "../media/Youtube.png";
import Movie from "../media/Movie.png"

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
        <Container>
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
                    <div className="flip-card" class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={Box8} />
                          <Card.Body>
                            <Card.Title align="center">
                              PharmaEasy Clone
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Pharmaeasy provides consumers with on-demand,
                                home delivered access to a wide range of
                                prescription, and teleconsultations thereby
                                serving their healthcare needs.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          {/* <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          /> */}

                          {/* <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          /> */}

                          <img
                            src="https://cdn.cdnlogo.com/logos/r/85/react.svg"
                            alt="React js"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
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
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={nordstrom} />
                          <Card.Body>
                            <Card.Title align="center">
                              BestBuy Clone
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Shop Best Buy for electronics, computers,
                                appliances, cell phones, video games & more new
                                tech. In-store pickup & free 2-day shipping on
                                thousands of items.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="mongodb"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://cdn.cdnlogo.com/logos/r/85/react.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="nodejs"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                            alt="express"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
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

              <Col lg={4} sm={12} >
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card dis">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={Movie} />
                          <Card.Body>
                            <Card.Title align="center">Movie App</Card.Title>
                            <Card.Text>
                              <p align="center">
                                It's a movie app, users can search various type
                                of movie and also see the Popular, Top Rated as
                                well as the Upcoming Movies.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                        <img
                            src="https://cdn.cdnlogo.com/logos/r/85/react.svg"
                            alt="React js"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
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
                      href="https://github.com/Saraswati121/Movie-App"
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
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={Youtube} />
                          <Card.Body>
                            <Card.Title align="center">
                              Youtube Clone
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                An app to watch youtube videos fetching API.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://endearing-pastelito-e04312.netlify.app/"
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
                      href="https://github.com/Saraswati121/Youtube-clone"
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
