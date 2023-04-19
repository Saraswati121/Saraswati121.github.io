import React, {useEffect} from 'react'
import { Slide } from "react-awesome-reveal";
import skillsLight from '../media/sam.png';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button';
import GitHubCalendar from 'github-calendar';
import "./styles.css";
import Card from 'react-bootstrap/esm/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt,  faHtml5, faJs, faNodeJs, faReact,faGithub} from '@fortawesome/free-brands-svg-icons';

const Skills = ({darkMode}) => {
    useEffect(() => {
        GitHubCalendar('.calendar', 'Saraswati121', {
          responsive: true,
          tooltips: true,
          global_stats: true,
          summary_text: 'Contributions in the last year',
          color: "hsl(120, 100%, 25%)",
        });
      }, []);
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
            <Container>
                <Row>
                <Col lg={4} xs={8}>
                    <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                    <img src={skillsLight} alt="skills" className="skills-img img-fluid animated"/>
                </Col>
                <Col lg={2} xs={4}>
                    <br></br>
                    <Card className="nbcard">
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faHtml5}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faCss3Alt}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faJs}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faReact}/>
                    </Button> 
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faNodeJs}/>
                    </Button>
                    <br />
                    <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                    <FontAwesomeIcon className="skill" size='2x' icon={faGithub}/>
                    </Button>
                    <br />

                    </Card>

                </Col>
                <Col lg={6} xs={12}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Front End</Card.Title>
                            <Card.Text>HTML, CSS, JavaScript, ReactJs, Redux, Material UI, Bootstrap, Netlify.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Backend</Card.Title>
                            <Card.Text>ExpressJs, NodeJS, MongoDB, JWT, Heroku,Vercel, Render,Thunder Client  </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Tools</Card.Title>
                            <Card.Text>Git & Github, PostMan, MongoDb Atlas, VS Code, Winston Logger, Swagger </Card.Text>
                        </Card.Body>
                    </Card>
                  
                </Col>
                </Row>
                <br></br>
                <hr></hr>
            </Container>
            </Slide>

        <h2 className="lead" align="center">
        <b>- My Github Stats -</b>
        </h2>
        <br></br>
      <div className="gitSts">
    <div>
    <p>
        &nbsp;
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=Saraswati121&show_icons=true&locale=en&theme=highcontrast"
          alt="Saraswati Panda"
        />
      </p>
    </div>
    <div>
     <p>
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Saraswati121&&theme=highcontrast"
          alt="Saraswati121"
        />
      </p>
      </div>
      </div>
      <br></br>
      <div  className="calendar"></div>
      <br />
      <br />
      <hr />
        </div>
    )
}

export default Skills
