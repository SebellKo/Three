import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

type PlaneProps = ThreeElements['mesh'];

function Top(props: PlaneProps) {
  return (
    <mesh
      position={[0, 0.5, 0]}
      rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
      {...props}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#ff006e'
        opacity={0.8}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Top;
