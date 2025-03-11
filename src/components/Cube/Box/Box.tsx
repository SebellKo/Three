import Back from '../Plane/Back';
import Bottom from '../Plane/Bottom';
import Front from '../Plane/Front';
import Left from '../Plane/Left';
import Right from '../Plane/Right';
import Top from '../Plane/Top';

interface Props {
  position: [x: number, y: number, z: number];
}

function Box({ position }: Props) {
  return (
    <mesh position={position}>
      <Front />
      <Left />
      <Right />
      <Back />
      <Bottom />
      <Top />
    </mesh>
  );
}

export default Box;
