import { Box } from 'components/Box';

import { AiOutlineSearch } from 'react-icons/ai';
import UserFoto from '../../images/user.png';
import logo from '../../images/logo.png';

import { LogoDate, LogoImg, SvgBox, UserImg } from './AppBar.styled';

const date = new Date();
const monch = date.toLocaleString('en', { month: 'long' });
const weekday = date.toLocaleString('en', { weekday: 'long' });
const day = date.getDate();

export const AppBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb="15px"
    >
      <Box display="flex" alignItems="center">
        <a href="/">
          <LogoImg src={logo} alt="Logo" />
        </a>
        <LogoDate>{`${weekday} ${monch} ${day}th`}</LogoDate>
      </Box>
      <Box display="flex" alignItems="center">
        <SvgBox>
          <AiOutlineSearch />
        </SvgBox>
        <a href="/">
          <UserImg src={UserFoto} alt="User Foto" />
        </a>
      </Box>
    </Box>
  );
};
