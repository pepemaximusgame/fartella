import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { FishExperience } from "./FishExperience";
import { GlobeExperience } from "./GlobeExperience";
// import AnimatedCounter from "./AnimatedCounter";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ChikulExperience } from "./ChikulExperience";

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

   
//     </>
//   );
// }

// export default Example;

 const Moments=()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <section className="bannermoments" id="stories"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <h1>{'Fartella-The Future of Finance'}<span className="wrap">!</span></h1>
                <p>Introducing Fartella Coin—the first crypto that isn’t afraid to break wind and break barriers. Powered by the unstoppable force of meme magic and blockchain brilliance, Fartella is more than just a fart coin—it’s a gas-powered revolution. Built for the bold, the cheeky, and the crypto-curious, Fartella combines utility with humor to create a token that's both fun and functional. Join the Fartella fam and ride the gust of change all the way to the moon. Because in the world of crypto, sometimes it pays to let one rip! </p>
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <ChikulExperience/>
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

        </>
        
        
    )
 }
 export default Moments;