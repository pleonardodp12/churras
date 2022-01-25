import styled from 'styled-components';

export const Button = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: filter 0.3s;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  &:hover {
    filter: brightness(0.8);
  }
`;
