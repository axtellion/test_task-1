import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import bollOrange from '../../images/bolls_or_64.png';

export const OrangeBoll = ({ prop = [], arg = [0.3, 32] }) => {
  const ref = useRef();
  const [boll] = useLoader(TextureLoader, [bollOrange]);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  }, []);

  return (
    <mesh ref={ref} position={prop}>
      <sphereGeometry args={arg} />
      <meshBasicMaterial map={boll} />
    </mesh>
  );
};
