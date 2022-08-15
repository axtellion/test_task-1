import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import boll64 from '../../images/bolls_64.png';
import { useBox } from '@react-three/cannon';

export const Boll = ({ prop = [], arg = [0.3, 32] }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [1, 2, 10],
  }));
  const [boll] = useLoader(TextureLoader, [boll64]);

  useFrame(() => {
    ref.current.rotation.y += 0.1;
  }, []);

  return (
    <mesh ref={ref} position={prop}>
      <sphereGeometry args={arg} />
      <meshBasicMaterial map={boll} />
    </mesh>
  );
};
