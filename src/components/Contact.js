import {Col, Container, Row} from "react-bootstrap"
import aboutImage from '../assets/about.jpg';
import email from '../assets/logoemail.png';
import instagram from '../assets/logoinstagram.png';
import linkedin from '../assets/logolinkedin.png';

const Contact = () => {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col id="contact">
          <div className="div">
          <div className="frame">
              <div className="text-wrapper">Contact</div>
                <p className="for-more-about-me">
                  For More About Me, Please Click On The Logo <br />
                  Below To Follow My Social Media:
                </p>
          </div>
          <img className="img" alt="about" src={aboutImage} />
          <div className="frame-2">
              <a href="mailto:wiche3012@gmail.com" >
                <img className="logoemail" alt="email" src={email} />
              </a>
              <a href="https://www.instagram.com/wicheriani/" >
                <img className="logoinstagram" alt="instagram" src={instagram} />
              </a>
              <a href="https://www.linkedin.com/in/wicherianigaluhdesduipa/" >
                <img className="logolinkedin" alt="linkedin" src={linkedin} />
              </a>

              <div className="text-wrapper-2">wiche3012@gmail.com</div>
              <div className="text-wrapper-3">Wicheriani Galuh Desduipa</div>
              <div className="text-wrapper-4">wicheriani</div>
          </div>
        </div>
          </Col>
        </Row>
      </Container>
        
    </div>
  );
};

export default Contact;
