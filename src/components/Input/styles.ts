import styled from 'styled-components';

interface TInputProps {
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

export const Label = styled.span`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const InputBase = styled.input<TInputProps>`
  height: 42px;
  padding: 4px 8px;
  border-radius: 2px;
  border: ${({ isInvalid }) =>
    isInvalid ? '1px solid red' : '1px solid transparent'};
  transition: border 0.3s;
  font-size: 18px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blackLight};
  }
`;

export const ContentIconPassword = styled.div`
  position: absolute;
  top: 46px;
  right: 16px;
`;
