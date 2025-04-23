import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { degToRad } from 'three/src/math/MathUtils.js';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';
// import { Rick } from './Rick';
// import { RickFull } from './RickFull';
// import { RickFullAgain } from './RickFullAgain';
// import RedParticles from './RedParticles';
import { Momoi } from './Momoi';
import { Chikul } from './Chikul';
import { Globe } from './Globe';

export const GlobeExperience = () => {
    const [animation, setAnimation] = useState("mixamo.com");

  return (
    <div className='hero-rick-layout' >
 <Canvas camera={{ position: [0, 0, 15], fov: 45 }} >
        <ambientLight intensity={0.5}  />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <group rotation-y={degToRad(-220)} position-x={-1} position-y={-6}>
        <OrbitControls
      enablePan={false} // Prevents panning of the scene
      enableZoom={false} // Disables zoom on tablets
      maxDistance={20} // Maximum distance for zooming out
      minDistance={5} // Minimum distance for zooming in
      minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
      maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
    />
    <Particles count={800}/>
       <Globe scale={0.1} animation={animation}/>
       
       {/* <RedParticles count={800} /> */}
       </group>
    </Canvas>
    </div>
   
  )
}

