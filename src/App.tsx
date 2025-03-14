import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrbitControlsChangeEvent } from '@react-three/drei';
import Cube from './components/Cube/Cube';
import { useOrbitControlStore } from './stores/orbitControlStore';

function App() {
  const active = useOrbitControlStore((state) => state.active);
  const setPosition = useOrbitControlStore((state) => state.setPosition);

  const handleEndOrbit = (event: OrbitControlsChangeEvent) => {
    setPosition(event?.target.object.position);
    console.log(event?.target.object.position);
  };

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
          <OrbitControls
            enabled={active}
            onEnd={(event) => handleEndOrbit(event as OrbitControlsChangeEvent)}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
