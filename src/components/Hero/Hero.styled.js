import styled from 'styled-components';

export const Item = styled.ul`
  display: flex;
  gap: 45px;
  font-size: 32px;

  margin-bottom: 50px;

  color: white;
  li:not(:last-child):after {
    content: '';
    border-right: 3px solid white;
    padding-right: 22px;
  }
`;

export const List = styled.li``;

export const Title = styled.h1`
  color: white;
  font-size: 64px;

  margin-bottom: 36px;
`;

export const Text = styled.ul`
  display: flex;
  gap: 25px;
  font-size: 30px;

  color: white;
  margin-bottom: 8px;

  li:not(:last-child):after {
    content: 'd';
    color: transparent;
    border-right: 3px solid white;
    padding-right: 22px;
  }
`;

export const TextTitle = styled.li`
  display: flex;
  align-items: center;
`;

export const TextWrap = styled.span`
  margin-left: 12px;
  color: #a7a6a6;
`;

export const Info = styled.p`
  font-size: 24px;
  color: #a7a6a6;
  max-width: 864px;

  margin-bottom: 40px;
`;

export const BtnRed = styled.button`
  cursor: pointer;
  width: 272px;
  font-size: 22px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 35px;
  border-radius: 10px;
  border: none;
  margin-right: 50px;

  color: white;
  background-color: red;

  svg {
    background-color: white;
    fill: red;

    margin-left: 20px;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  font-size: 22px;
  width: 272px;
  border: 3px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;

  padding: 16px 58px;
`;
