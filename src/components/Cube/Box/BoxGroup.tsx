import Box from './Box';

interface Props {
  y: number;
}

function BoxGroup({ y }: Props) {
  return (
    <>
      <Box position={[0, y, 0]} />
      <Box position={[1, y, 0]} />
      <Box position={[-1, y, 0]} />
      <Box position={[0, y, 1]} />
      <Box position={[0, y, -1]} />
      <Box position={[1, y, 1]} />
      <Box position={[1, y, -1]} />
      <Box position={[-1, y, 1]} />
      <Box position={[-1, y, -1]} />
    </>
  );
}

export default BoxGroup;
