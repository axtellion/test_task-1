import styled from 'styled-components';

export const LogoImg = styled.img`
  background-color: transparent;
  margin-right: 16px;
  color: green;
`;

export const LogoDate = styled.span`
  font-size: 24px;
  color: #c8c8c8;
  ::before {
    content: '';
    padding-left: 26px;
    border-left: 3px solid white;
  }
`;

export const SvgBox = styled.span`
  margin-right: 45px;
  svg {
    width: 36px;
    height: 36px;
    color: white;
  }
`;

export const UserImg = styled.img`
  background-color: transparent;
  border-radius: 50%;
`;
