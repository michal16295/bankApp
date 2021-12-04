import styled from "styled-components";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import ItemContainer from "../ItemContainer";

const InvoiceItem = ({ title, color, sum, difference, rising = true }) => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>{title}</div>
        <Flex>
          <div>{sum}</div>
          <Box color={color}>
            {rising ? (
              <FlexInner>
                <div>+{difference}%</div>
                <AiOutlineRise size={25} />
              </FlexInner>
            ) : (
              <FlexInner>
                <div>-{difference}%</div>
                <AiOutlineFall size={25} />
              </FlexInner>
            )}
          </Box>
        </Flex>
      </div>
    </ItemContainer>
  );
};
export default InvoiceItem;

const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 10px;
`;

const Box = styled.div`
  height: 20px;
  padding: 10px;
  width: 100px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const FlexInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
