import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';

function App() {
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
          <Box position={[0, 0, 0]}></Box>
          <gridHelper args={[10, 10]}></gridHelper>
          <axesHelper args={[8]}></axesHelper>
          <OrbitControls></OrbitControls>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
