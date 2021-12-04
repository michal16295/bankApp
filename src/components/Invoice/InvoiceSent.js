import styled from "styled-components";
import { BsCheckAll } from "react-icons/bs";
import ItemContainer from "../ItemContainer";

const SentInvoice = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Invoice Sent</div>
        <Flex>
          <div>120</div>
          <Box>
            <BsCheckAll size={40} color="white" />
          </Box>
        </Flex>
      </div>
    </ItemContainer>
  );
};
export default SentInvoice;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 12px;
  background-color: #f0ca43;
  display: flex;
  justify-content: center;
  align-items: center;
`;
