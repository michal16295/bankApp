import styled from "styled-components";
import BalanceItem from "../components/Dashboard/Balance";
import LatesActivity from "../components/Dashboard/Activity";
import Card from "../components/Dashboard/Card";

import InvoiceItem from "../components/Invoice/InvoiceItem";
import TotalInvoice from "../components/Invoice/Total";
import SentInvoice from "../components/Invoice/InvoiceSent";

import LatestTransactions from "../components/Dashboard/LatestTransactions";
import Earnings from "../components/Dashboard/Earnings";
import FriendsList from "../components/Dashboard/FriendsList";

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
  {
    difference: 100,
    rise: false,
    title: "H&M",
    date: "2 March 2021",
  },
];

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
        <TotalInvoice />
        <InvoiceItem
          title="Paid Invoice"
          sum={210}
          difference={12}
          rising={true}
          color="#007EFF"
        />
        <InvoiceItem
          title="Unpaid Invoice"
          sum={65}
          difference={12}
          rising={false}
          color="#F04343"
        />
        <SentInvoice />
      </Row>

      <Row>
        <LatestTransactions title="Latest Transactions" data={data} />
        <Earnings />
        <FriendsList />
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
