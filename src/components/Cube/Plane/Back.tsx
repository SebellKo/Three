import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

type PlaneProps = ThreeElements['mesh'];

function Back(props: PlaneProps) {
  return (
    <mesh
      position={[0, 0, -0.5]}
      rotation={[0, THREE.MathUtils.degToRad(180), 0]}
      {...props}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#ffbe0b'
        opacity={0.8}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Back;
