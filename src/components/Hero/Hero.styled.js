import styled from 'styled-components';

export const Item = styled.ul`
  font-size: ${p => p.theme.fontSizes.m};
  display: flex;
  gap: 25px;

  margin-bottom: 40px;

  @media screen and (min-width: 590px) {
    font-size: ${p => p.theme.fontSizes.l};
    gap: 45px;

    li:not(:last-child):after {
      content: ' ';
      border-right: ${p => p.theme.borders.line};
      padding-right: 22px;
    }
  }
`;

export const List = styled.li``;

export const Title = styled.h1`
  font-size: 52px;
  margin-bottom: 36px;

  @media screen and (min-width: 590px) {
    font-size: ${p => p.theme.fontSizes.xl};

    animation-name: example;
    animation-duration: 2s;
    position: relative;

    @keyframes example {
      0% {
        transform: translateX(-50%);
      }
      50% {
        transform: translateX(30%);
      }
      75% {
        transform: translateX(10%);
      }
    }
  }
`;

export const Text = styled.ul`
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1024px) {
    li:not(:last-child):after {
      content: 'd';
      color: transparent;
      border-right: ${p => p.theme.borders.line};

      padding-right: 22px;
    }
  }
`;

export const TextTitle = styled.li`
  display: flex;
  align-items: center;
`;

export const TextWrap = styled.span`
  margin-left: 12px;
  color: ${p => p.theme.colors.accent};
`;

export const Info = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.accent};

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 864px;
  }
`;

export const BtnRed = styled.button`
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;

  width: 272px;
  margin-right: 50px;
  padding: 16px 35px;

  svg {
    background-color: ${p => p.theme.colors.white};
    fill: ${p => p.theme.colors.primary};

    margin-left: 20px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;

export const Btn = styled.button`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.line};
  border-radius: 10px;
  background-color: transparent;

  width: 272px;
  padding: 16px 58px;

  cursor: pointer;
`;
