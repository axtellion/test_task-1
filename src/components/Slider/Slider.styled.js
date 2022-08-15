import styled from 'styled-components';

export const SlidImg = styled.img`
  width: 150px;
  height: 210px;
  display: block;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: white;

  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 400px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 800px;
  }
`;
