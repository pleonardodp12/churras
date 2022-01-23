import styled from 'styled-components';

interface IInputProps {
  isInvalid: boolean;
}

export const Wrapper = styled.div<IInputProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  .react-date-picker__wrapper {
    width: 282px;
    height: 42px;
    padding: 4px 8px;
    border-radius: 2px;
    transition: border 0.3s;
    border: ${({ theme, isInvalid }) =>
      isInvalid ? '1px solid red' : `1px solid ${theme.colors.gray}`};
    font-size: 18px;
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.blackLight};
    }
  }
`;
