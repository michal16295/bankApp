import styled from "styled-components";
import ItemContainer from "../components/ItemContainer";
import Table from "../components/Table";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";

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
    id: "1",
    type: "VISA",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    id: "2",
    type: "American Express",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    id: "3",
    type: "Master Card",
    bank: "BNI",
    number: "4580 **** **** ****",
    name: "Michal Barski",
  },
  {
    id: "4",
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
        <ItemContainer>
          <div style={{ padding: "20px" }}>
            <div style={{ margin: "10px 0" }}>Add new card</div>
            <Input title="Name" placeholder="Name on the card" />
            <Input title="Card number" placeholder="**** **** **** ****" />
            <Input title="Bank" placeholder="Bank name" />
            <Input title="Password" placeholder="*****" />
            <Input title="Email" placeholder="email@email.com" />
            <Button title="add new card" />
          </div>
        </ItemContainer>
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
