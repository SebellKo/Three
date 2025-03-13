import { useRef, useState } from 'react';
import Back from '../Plane/Back';
import Bottom from '../Plane/Bottom';
import Front from '../Plane/Front';
import Left from '../Plane/Left';
import Right from '../Plane/Right';
import Top from '../Plane/Top';
import { Mesh, Object3D } from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { useOrbitControlStore } from '../../../stores/orbitControlStore';

interface Props {
  position: [x: number, y: number, z: number];
}

const parseToFixedFloat = (num: number) => {
  return parseFloat((num * 10).toFixed(2));
};

function Box({ position }: Props) {
  const boxRef = useRef<Mesh>(null);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [verGroup, setVerGroup] = useState<Object3D[]>([]);
  const [horGroup, setHorGroup] = useState<Object3D[]>([]);
  const [pointerPos, setPointerPos] = useState<{
    x: number;
    y: number;
  } | null>();
  const [direction, setDirection] = useState<string>();

  const handlePointerDown = (event: ThreeEvent<MouseEvent>) => {
    const { x, y } = event.pointer;
    setPointerPos(() => ({
      x: parseToFixedFloat(x),
      y: parseToFixedFloat(y),
    }));

    setIsClick(true);

    const { x: posX, y: posY } = boxRef.current?.position!;
    const children = boxRef.current?.parent?.children;

    const meshes = children?.filter((item) => item.type === 'Mesh');
    const verMeshes = meshes?.filter((item) => item.position.y === posY);
    const horMeshes = meshes?.filter((item) => item.position.x === posX);

    setVerGroup(verMeshes!);
    setHorGroup(horMeshes!);
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (!isClick) return;
    if (!pointerPos) return;

    const { x, y } = event.pointer;
    const pointerX = parseToFixedFloat(x);
    const pointerY = parseToFixedFloat(y);

    const { x: startX, y: startY } = pointerPos;
    const deltaX = startX - pointerX;
    const deltaY = startY - pointerY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0.3) setDirection('left');
      else if (deltaX < -0.3) setDirection('right');
    } else {
      if (deltaY > 0.3) setDirection('down');
      else if (deltaY < -0.3) setDirection('up');
    }
  };

  const handlePointerOut = () => {
    setIsClick(false);
    setPointerPos(null);
  };

  return (
    <mesh
      ref={boxRef}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onPointerUp={handlePointerOut}
    >
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
