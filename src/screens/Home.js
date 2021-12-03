import styled from "styled-components";
import BalanceItem from "../components/Dashboard/Balance";
import LatesActivity from "../components/Dashboard/Activity";
import Card from "../components/Dashboard/Card";

const Home = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Row>
        <BalanceItem />
        <LatesActivity />
        <Card />
      </Row>

      <Row>
        <Col>
          <div>Total Invoice</div>
        </Col>
        <Col>
          <div>Paid Invoice</div>
        </Col>
        <Col>
          <div>Unpaid Invoice</div>
        </Col>
        <Col>
          <div>Invoice sent</div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>Latest Transaction</div>
        </Col>
        <Col>
          <div>Earnings Categories</div>
        </Col>
        <Col>
          <div>Friends List</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

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

const Col = styled.div`
  background-color: ${({ theme }) => theme.colors.light.sideBar};
  border-radius: 24px;
  padding: 20px;
  flex: 1 1 40px;
  font-weight: bold;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
