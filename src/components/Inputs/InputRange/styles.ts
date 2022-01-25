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

export const ContentInputs = styled.div`
  margin-bottom: 8px;
  input {
    width: 100%;
    max-width: 282px;
    font-size: 18px;
    margin: 0 8px;
  }

  div {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
