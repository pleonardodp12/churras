import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 282px;
  height: 192px;
  padding: 16px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  flex: 0 1 282px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 8px;
`;

export const RegularText = styled.p`
  font-weight: medium;
  font-size: 18px;
`;

export const FooterCard = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > section {
    display: flex;
    align-items: center;
    flex-direction: row;
    p {
      margin-left: 4px;
    }
  }
`;
