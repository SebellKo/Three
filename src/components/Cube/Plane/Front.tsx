import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

type PlaneProps = ThreeElements['mesh'];

function Front(props: PlaneProps) {
  return (
    <mesh position={[0, 0, 0.5]} {...props}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#8338ec'
        opacity={0.8}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Front;
