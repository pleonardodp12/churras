import styled from 'styled-components';

interface IInputProps {
  isInvalid: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 282px;
  margin-bottom: 16px;
  div {
    font-size: 18px;
    font-weight: bold;
    margin: 4px 0 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputBase = styled.input<IInputProps>`
  border-radius: 28px;
  width: 80%;
  -webkit-appearance: none;
  border: ${({ isInvalid, theme }) =>
    isInvalid ? '1px solid red' : `1px solid ${theme.colors.blackLight}`};
  transition: border box-shadow 0.3s;
  &:focus {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.09);
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
