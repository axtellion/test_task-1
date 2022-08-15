import styled from 'styled-components';

export const LogoImg = styled.img`
  margin-right: 26px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
`;

export const LogoDate = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.secondary};
    ::before {
      content: '';
      padding-left: 16px;
      border-left: ${p => p.theme.borders.line};
    }
  }
`;

export const SvgBox = styled.span`
  margin-right: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 36px;
    height: 36px;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      transform: scale(1.2);
    }
  }
`;

export const UserImg = styled.img`
  background-color: transparent;
  border-radius: 50%;
`;
