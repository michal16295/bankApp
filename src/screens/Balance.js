import styled from "styled-components";

import Card from "../components/Dashboard/Card";
import LatestTransactions from "../components/Dashboard/LatestTransactions";
import EarningsSources from "../components/Balance/EarningSource";

import Table from "../components/Balance/Table";

import Transfer from "../components/Balance/TransferForm";
import SendInvoice from "../components/Balance/SendIvoicForm";

const data = [
  {
    difference: 45,
    rise: true,
    title: "Deposit Waste",
    date: "2 March 2021",
  },
  {
    difference: 45,
    rise: false,
    title: "Upgrade Storage Plan",
    date: "2 March 2021",
  },
  {
    difference: 50,
    rise: true,
    title: "Bank",
    date: "2 March 2021",
  },
];

const Balance = () => {
  return (
    <Container>
      <Title>Balance</Title>
      <Flex>
        <Col>
          <Card />
          <EarningsSources />
          <LatestTransactions title="Transfer History" data={data} />
        </Col>
        <Col>
          <Table title="Latest Transactions" />
          <Table title="Latest Invoice" />
        </Col>
        <Col>
          <Transfer />
          <SendInvoice />
        </Col>
      </Flex>
    </Container>
  );
};

export default Balance;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;

const Flex = styled.div`
  display: flex;
  column-gap: 30px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 30px;
  margin: 40px 0;
  flex: 1;
`;
