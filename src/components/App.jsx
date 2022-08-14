import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContainerBg } from './App.styled';

import { Hero } from './Hero/Hero';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <ContainerBg>
      <Box pl="81px" pr="35px" pt="70px" pb="45px">
        <AppBar />
        <Hero />
        <GlobalStyle />
      </Box>
    </ContainerBg>
  );
};
