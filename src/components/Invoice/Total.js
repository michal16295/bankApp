import styled from "styled-components";

import ItemContainer from "../ItemContainer";

const TotalInvoice = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Total Invoice</div>
        <Flex>
          <div>520</div>
        </Flex>
      </div>
    </ItemContainer>
  );
};
export default TotalInvoice;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
