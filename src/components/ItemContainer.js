import styled from "styled-components";

const ItemContainer = ({ children, flex = "1 1 150px" }) => {
  return <Container flex={flex}>{children}</Container>;
};

export default ItemContainer;

const Container = styled.div`
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light.mainFont};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);

  background: ${({ theme }) => theme.colors.light.sideBar}; /* default color */
  transition: 0.5s ease-out;

  &:hover {
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.16);
  }
`;
