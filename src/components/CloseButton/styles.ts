import styled from 'styled-components';

export const CloseButtonBase = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
