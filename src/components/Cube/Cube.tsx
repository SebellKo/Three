import BoxGroup from './Box/BoxGroup';

function Cube() {
  return (
    <>
      <BoxGroup y={0} />
      <BoxGroup y={1} />
      <BoxGroup y={-1} />
    </>
  );
}

export default Cube;
