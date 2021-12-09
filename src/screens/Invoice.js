import styled from "styled-components";
import InvoiceBasic from "../components/Invoice/InvoiceBasic";
import Table from "../components/Table";

import { FaFileInvoiceDollar, FaCheck, FaTimes } from "react-icons/fa";

const cols = [
  {
    color: "mainFont",
    title: "id",
  },
  {
    color: "secondFont",
    title: "date",
  },
  {
    color: "mainFont",
    title: "recipent",
  },
  {
    color: "blue",
    title: "email",
  },
  {
    color: "secondFont",
    title: "service",
  },
  {
    color: "blue",
    title: "status",
  },
];
const data = [
  {
    id: "INV-001-123",
    date: "28/02",
    recipent: "Michal",
    email: "michal@gmail.com",
    service: "Web Development",
    status: "paid",
  },
  {
    id: "INV-002-123",
    date: "16/02",
    recipent: "Niv",
    email: "niv@gmail.com",
    service: "Web Design",
    status: "paid",
  },
  {
    id: "INV-003-123",
    date: "15/02",
    recipent: "Reut",
    email: "reut@gmail.com",
    service: "Web Design",
    status: "unpaid",
  },
];
const Invoice = () => {
  return (
    <Container>
      <Title>Invoice</Title>
      <Flex>
        <InvoiceBasic
          title="Total Invoices"
          sum={520}
          color="#F0CA43"
          icon={<FaFileInvoiceDollar color="white" size={30} />}
        />
        <InvoiceBasic
          title="Paid Invoices"
          sum={300}
          color="#007EFF"
          icon={<FaCheck color="white" size={30} />}
        />
        <InvoiceBasic
          title="Unpaid Invoices"
          sum={220}
          color="#F04343"
          icon={<FaTimes color="white" size={30} />}
        />
      </Flex>
      <Table title="Latest Invoices" cols={cols} data={data} />
    </Container>
  );
};

export default Invoice;

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
  align-items: center;
  column-gap: 20px;
  margin-bottom: 30px;
`;
