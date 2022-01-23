import styled from 'styled-components';

interface ICheck {
  selected: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const Option = styled.div<ICheck>`
  padding: 8px 16px;
  width: 100%;
  height: 60px;
  margin: 8px 0;
  border-radius: 16px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.gray};
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
  img {
    margin-right: 16px;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4));
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
