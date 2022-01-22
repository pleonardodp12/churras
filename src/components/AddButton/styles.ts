import styled from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: 50px;
  border-radius: 18px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.4);
  }
`;
