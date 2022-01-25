import styled from 'styled-components';

export const ButtonBase = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
`;
