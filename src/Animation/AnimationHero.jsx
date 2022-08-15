import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Boll } from './Boll/Boll';
import { Plane } from './Plane/Plane';
import { Physics, Debug } from '@react-three/cannon';
import { Container } from './AnimationHero.styled';
import { OrangeBoll } from './Boll/OrangeBoll';

export const AnimationHero = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Canvas>
          <Physics>
            <Debug color="black" scale={1.5} />
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            <OrangeBoll prop={[-2, 2.3, 0]} />
            <Boll prop={[4, 3.5, 0]} />
            <Boll prop={[3.5, 3, 0]} />
            <Boll prop={[3, 2.5, 0]} arg={[0.5, 32]} />
            <Boll prop={[3.5, 2.5, 0]} />
            <Boll prop={[3, 2, 0]} />
            <Boll prop={[2.5, 2, 0]} />
            <Boll prop={[2.7, 1.6, 0]} />
            <Boll prop={[3.5, 1.1, 0]} arg={[0.8, 32]} />
            <Boll prop={[3, 0, 0]} arg={[0.5, 32]} />
            <Boll prop={[2.5, -1, 0]} arg={[0.8, 32]} />
            <Boll prop={[2, -2, 0]} arg={[0.5, 32]} />
            <Boll prop={[4.1, 3.1, 0]} arg={[0.1, 32]} />
            <Boll prop={[2, -3, 0]} arg={[0.5, 32]} />
            <OrangeBoll prop={[5, 3, 0]} arg={[0.1, 32]} />
            <Plane />
          </Physics>
        </Canvas>
      </Suspense>
    </Container>
  );
};
