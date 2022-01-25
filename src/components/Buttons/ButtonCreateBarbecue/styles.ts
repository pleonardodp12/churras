import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 282px;
  height: 192px;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  cursor: pointer;
  flex: 0 1 282px;
  transition: filter 0.3s;

  & > h6 {
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    margin-top: 8px;
  }

  &:hover {
    filter: brightness(0.96);
  }
`;
