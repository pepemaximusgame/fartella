import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const PlayFred=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='about'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} m1d={12} xl={12}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'Play our game'}<span className="wrap"></span></h1>
                <h2>{'About Fred the Fish Coin'}<span className="wrap">!</span></h2>
                <p>
                Fred the Fish: The Floor is Falling!
                Fred the Fish is in deep trouble! The ground beneath him is crumbling, and he must run, jump, and dash to avoid falling into the abyss. In this fast-paced survival game, players control Fred as he navigates a treacherous underwater world where platforms disappear one by one.</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default PlayFred;