import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

type PlaneProps = ThreeElements['mesh'];

function Right(props: PlaneProps) {
  return (
    <mesh
      position={[0.5, 0, 0]}
      rotation={[0, THREE.MathUtils.degToRad(90), 0]}
      {...props}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#3dcd76'
        opacity={0.8}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Right;
