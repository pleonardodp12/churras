import styled from 'styled-components';

interface IPropsPrice {
  paid: boolean;
}

export const WrapperOutSide = styled.div`
  width: 90%;
  max-width: 588px;
  padding: 48px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  margin: -80px auto 48px auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  height: 100%;
`;
export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
export const Description = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const ListContainer = styled.ol`
  width: 100%;
  list-style: none;
  margin-top: 28px;
`;

export const ListItemBase = styled.li`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5c23188;
  margin-bottom: 16px;
  transition: filter 0.3s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ListItemText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  > div {
    margin-right: 8px;
  }
`;

export const ListItemPrice = styled.p<IPropsPrice>`
  text-decoration: ${({ paid }) => (paid ? 'line-through' : 'none')};
`;

export const Check = styled.div<IPropsPrice>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ paid, theme }) =>
    paid ? theme.colors.primary : theme.colors.white};
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 48px;
  position: absolute;
  background-color: white;
  align-self: center;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  button {
    align-self: center;
    margin-bottom: 24px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
