import { Box } from 'components/Box';
import { RatingStars } from 'components/RatingStars/RatingStars';
import { Slid } from 'components/Slider/Slider';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Flags } from 'components/Flags/Flags';
import { useMedia } from 'react-use';
import {
  Item,
  List,
  Title,
  Text,
  TextTitle,
  TextWrap,
  Info,
  BtnRed,
  Btn,
} from './Hero.styled';

export const Hero = () => {
  const isWide = useMedia('(min-width: 590px)');
  return (
    <Box as="main">
      <Item>
        <List>Drama</List>
        <List>Thriller</List>
        <List>Supernatural</List>
      </Item>
      <Title>Stranger Things</Title>
      <Text>
        <TextTitle>2019</TextTitle>
        <TextTitle>
          DIRECTOR:
          <TextWrap>Shawn Levy</TextWrap>
        </TextTitle>
        <TextTitle>
          seasons: 3<TextWrap>(5 Episodes)</TextWrap>
        </TextTitle>
      </Text>
      <Info>
        In 1980s Indiana, a group of young friends witness supernatural forces
        and secret government exploits. As they search for answers, the children
        unravel a series of extraordinary mysteries.
      </Info>
      <RatingStars />
      <Box display="flex" mb="15px">
        <BtnRed>STREAM NOW {isWide && <MdOutlineArrowRight />}</BtnRed>
        <Btn>ALL EPISODES</Btn>
      </Box>
      <Slid />
      <Flags />
    </Box>
  );
};
