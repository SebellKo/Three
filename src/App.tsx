import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './components/Cube/Cube';
import { useOrbitControlStore } from './stores/orbitControlStore';

function App() {
  const active = useOrbitControlStore((state) => state.active);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>
        <Canvas camera={{ position: [0, 1, 10] }}>
          <ambientLight />
          <Cube />
          <gridHelper args={[10, 10]}></gridHelper>
          <axesHelper args={[8]}></axesHelper>
          <OrbitControls enabled={active} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
