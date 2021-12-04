import styled from "styled-components";
import BalanceItem from "../components/Dashboard/Balance";
import LatesActivity from "../components/Dashboard/Activity";
import Card from "../components/Dashboard/Card";

import InvoiceItem from "../components/Invoice/InvoiceItem";

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
        <InvoiceItem
          title="Total Invoice"
          sum={520}
          difference={12}
          rising={true}
          color="#73DC8A"
        />
        <InvoiceItem
          title="Paid Invoice"
          sum={210}
          difference={12}
          rising={true}
          color="#73DC8A"
        />
        <InvoiceItem
          title="Unpaid Invoice"
          sum={65}
          difference={12}
          rising={true}
          color="#73DC8A"
        />
        <InvoiceItem
          title="Invoice sent"
          sum={120}
          difference={12}
          rising={true}
          color="#73DC8A"
        />
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
