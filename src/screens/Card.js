import styled from "styled-components";
import Table from "../components/Table";

const CardCols = [
  {
    title: "type",
    color: "mainFont",
  },
  {
    title: "bank",
    color: "mainFont",
  },
  {
    title: "number",
    color: "mainFont",
  },
  {
    title: "name",
    color: "mainFont",
  },
];
const Data = [
  {
    type: "VISA",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    type: "American Express",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    type: "Master Card",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    type: "DIRECT",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
];
const Card = () => {
  return (
    <Container>
      <Title>Card Center</Title>
      <Row>
        <Table title="List Of Cards" cols={CardCols} data={Data} />
      </Row>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 20px;
  margin: 40px 0;
`;
