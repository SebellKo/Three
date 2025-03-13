import { useOrbitControlStore } from '../../stores/orbitControlStore';
import Box from './Box/Box';

const cubeDepth = [-1, 0, 1];
function Cube() {
  const cube = cubeDepth.flatMap((y) =>
    [-1, 0, 1].flatMap((x) =>
      Array(3)
        .fill(x)
        .map((_, i) => [x, y, i - 1])
    )
  );
  const setActive = useOrbitControlStore((state) => state.setActive);

  const handlePointerDown = () => setActive(false);
  const handlePointerUp = () => setActive(true);

  return (
    <mesh onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      {cube.map((item, index) => (
        <Box key={index} position={[item[0], item[1], item[2]]} />
      ))}
    </mesh>
  );
}

export default Cube;
