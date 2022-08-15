import { GlobalStyle } from './GlobalStyle';
import { ContainerBg, Container } from './App.styled';

import { Hero } from './Hero/Hero';
import { AppBar } from './AppBar/AppBar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimationHero } from 'Animation/AnimationHero';

export const App = () => {
  return (
    <>
      <AnimationHero />
      <ContainerBg>
        <Container>
          <AppBar />
          <Hero />
          <GlobalStyle />
        </Container>
      </ContainerBg>
    </>
  );
};
