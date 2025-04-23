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

 const Banner=()=>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
           <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="mt-9"> 
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         This Space belongs to Fart girl- enter at your own risk, and maybe hold your nose!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">Funny Fierce Fartella !</span>
                <h1>{'Fartella- The Queen of Toot'}<span className="wrap">!</span></h1>
                <p>Born from the depths of sass and gas, Fartella is the world’s first female-powered fartcoin that’s breaking wind and financial barriers. 
                Fueled by glitter, giggles, and unapologetic poots, she’s here to disrupt crypto with style and a little air. Backed by the Fartchain (smells like innovation), Fartella rewards holders who aren’t afraid to toot their own horn.
                Invest with gas. Hold with class. Welcome to the fartella world.</p>
                <button className="pointer-events-auto " onClick={handleShow} >
                    Let's Fart
                    <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <GlobeExperience/>
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
 export default Banner;