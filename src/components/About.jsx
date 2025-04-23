import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const About=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='about'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} m1d={12} xl={12}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'About us'}<span className="wrap"></span></h1>
                {/* <h2>{'About Fred the Fish Coin'}<span className="wrap">!</span></h2> */}
                <p>
                Fartass – Powered by fart and ass, Backed by Blockchain
Fartass is a next-gen meme token designed to bring fun, inclusivity, and a little unexpected gas to the crypto space. Combining cheeky charm with real utility, Fartass fuels a community of bold holders who aren’t afraid to laugh, lead, and innovate. Built on a secure blockchain and driven by decentralized values, Fartass is more than a meme—it’s a movement.

Smarter. Funnier. Fartier.</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default About;