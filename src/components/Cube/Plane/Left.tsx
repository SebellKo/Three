import * as TRHEE from 'three';
import { ThreeElements } from '@react-three/fiber';
import React from 'react';

type PlaneProps = ThreeElements['mesh'];

function Left(props: PlaneProps) {
  return (
    <mesh
      position={[-0.5, 0, 0]}
      rotation={[0, TRHEE.MathUtils.degToRad(-90), 0]}
      {...props}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#3a86ff'
        opacity={0.8}
        transparent
        side={TRHEE.DoubleSide}
      />
    </mesh>
  );
}

export default Left;
