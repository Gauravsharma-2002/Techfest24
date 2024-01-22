import React from 'react';
import { Canvas } from '@react-three/fiber';
import Star from '../../stars';


const Universe = () => {
  const starCount = 10000; // Adjust the number of stars

  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} />
      {Array.from({ length: starCount }).map((_, i) => (
        <Star key={i} />
      ))}
    </Canvas>
  );
};

export default Universe;