import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContainerBg } from './App.styled';

import { Hero } from './Hero/Hero';
import { AppBar } from './AppBar/AppBar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const App = () => {
  return (
    <ContainerBg>
      <Box pl="81px" pr="35px" pt="25px" pb="45px">
        <AppBar />
        <Hero />
        <GlobalStyle />
      </Box>
    </ContainerBg>
  );
};
