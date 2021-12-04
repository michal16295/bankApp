import styled from "styled-components";

const ItemContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ItemContainer;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light.sideBar};
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  flex: 1 1 150px;
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light.mainFont};
  transition: all 0.2s ease-in-out;
`;
