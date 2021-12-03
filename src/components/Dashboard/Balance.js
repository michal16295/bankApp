import ItemContainer from "../ItemContainer";
import { FaDollarSign } from "react-icons/fa";
import styled from "styled-components";

const BalanceItem = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Balance</div>
        <Sum>
          <div>
            100,000
            <FaDollarSign />
          </div>
          <Difference>+12</Difference>
        </Sum>
        <Note>*Updated approximately every 15 minutes</Note>
      </div>
    </ItemContainer>
  );
};

export default BalanceItem;

const Sum = styled.div`
  font-size: 22px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Difference = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light.green};
`;

const Note = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.light.secondFont};
  font-weight: 400;
`;
