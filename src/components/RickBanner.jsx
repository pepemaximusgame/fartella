import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
import { MomoiExperience } from "./MomoiExperience";
import { ChikulExperience } from "./ChikulExperience";
import { MomentsExperience } from "./MomentsExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const RickBanner=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='#'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'The Gorgeous'}<span className="wrap"></span></h1>
                <h1>{'Fartass'}<span className="wrap">!</span></h1>
                <p>She’s bold, she’s beautiful, and yes—she toots. Fartass isn’t just any other fart and ass coin, she’s a vibe. With curves in all the right charts and a sparkle that outshines the blockchain, Fartass floats through the crypto world with grace, glam, and a hint of mischief in the air. Every puff she passes is a perfume of profit. Every move she makes? Pure poise and power.

She’s not here to play small. She’s here to turn heads, inflate wallets, and leave a trail of fabulous.

Elegance has a scent. It’s called Fartella.
                </p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    {/* <RickExperience/> */}
                    {/* <MomoiExperience/> */}
                    {/* <ChikulExperience/> */}
                    <MomentsExperience/>
                </div>

                {/* <figure>
                <div className="hero-3d-layout ">
                <HomeExperience/>
                </div>
                </figure> */}

                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default RickBanner;