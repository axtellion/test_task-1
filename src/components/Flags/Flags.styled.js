import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    right: 0;
    top: 750px;
    width: 174px;
    height: 66px;
    background-color: rgba(255, 255, 255, 0.49);
  }
`;

export const Text = styled.div`
  font-size: ${p => p.theme.fontSizes.m};
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
