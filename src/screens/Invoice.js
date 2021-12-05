import styled from "styled-components";
import InvoiceBasic from "../components/Invoice/InvoiceBasic";

import { FaFileInvoiceDollar, FaCheck, FaTimes } from "react-icons/fa";

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
`;
