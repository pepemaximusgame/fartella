import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { SpongebobfishHome } from './SpongebobfishHome'
import { degToRad } from 'three/src/math/MathUtils.js';
import { OrbitControls } from '@react-three/drei';
import Particles from './Particles';

export const FishExperience = () => {
    const [animation, setAnimation] = useState("Hiphop Dancing");

  return (
    <div className='hero-3d-layout'>
 <Canvas camera={{ position: [0, 0, 15], fov: 45 }} >
        <ambientLight intensity={0.5}  />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <group rotation-y={degToRad(-26)} position-x={0} position-y={-4}>
        <OrbitControls
      enablePan={false} // Prevents panning of the scene
      enableZoom={false} // Disables zoom on tablets
      maxDistance={20} // Maximum distance for zooming out
      minDistance={5} // Minimum distance for zooming in
      minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
      maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
    />
       <SpongebobfishHome scale={2.5} animation={animation}/>
       <Particles count={500} />
       </group>
    </Canvas>
    </div>
   
  )
}

