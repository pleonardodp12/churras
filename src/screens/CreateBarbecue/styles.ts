import styled from 'styled-components';

export const WrapperOutSide = styled.section`
  width: 90%;
  max-width: 588px;
  padding: 48px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  margin: -80px auto 48px auto;
  position: relative;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
  }
`;

export const TitlePage = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
