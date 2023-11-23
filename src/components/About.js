import {Col, Container, Row} from "react-bootstrap"
import aboutImage from '../assets/about.jpg'

const About = () => {
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col id="about">
                    <div className="div">
                <img className="img" alt="about" src={aboutImage} />
                    <div className="frame">
                        <div className="text-wrapper">About Me</div>
                        <p className="p">
                        Saya merupakan mahasiswa yang penuh semangat dalam mengejar pengetahuan baru. 
                        Terus berkembang dan mengeksplorasi dunia ilmu adalah hal yang saya nikmati
                        </p>
                        
                    </div>
            </div>
                    </Col>   
                </Row>
            </Container>
            
      </div>
    )
}

export default About