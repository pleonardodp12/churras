import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 282px;
  height: 192px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  width: 60%;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: 8px;
`;
