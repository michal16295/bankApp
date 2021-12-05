import styled from "styled-components";
import ItemContainer from "../ItemContainer";

const InvoiceBasic = ({ sum, color, icon, title }) => {
  return (
    <Container>
      <Flex>
        <Box color={color}>{icon}</Box>
        <div>
          <Title>{title}</Title>
          <Sum>{sum}</Sum>
        </div>
      </Flex>
    </Container>
  );
};
export default InvoiceBasic;

const Container = styled.div`
  padding: 20px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.light.sideBar};
  margin-top: 20px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sum = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light.secondFont};
`;
