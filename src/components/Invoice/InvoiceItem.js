import styled from "styled-components";

import ItemContainer from "../ItemContainer";

const InvoiceItem = ({ title, color, sum, difference, rising = true }) => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>{title}</div>
        <Flex>
          <div>{sum}</div>
        </Flex>
      </div>
    </ItemContainer>
  );
};
export default InvoiceItem;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
