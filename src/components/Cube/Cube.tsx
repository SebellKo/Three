import Box from './Box/Box';

function Cube() {
  const cubeDepth = [-1, 0, 1];
  const cube = cubeDepth.flatMap((y) =>
    [-1, 0, 1].flatMap((x) =>
      Array(3)
        .fill(x)
        .map((_, i) => [x, y, i - 1])
    )
  );

  return (
    <>
      {cube.map((item, index) => (
        <Box key={index} position={[item[0], item[1], item[2]]} />
      ))}
    </>
  );
}

export default Cube;
