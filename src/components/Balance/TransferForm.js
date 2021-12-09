import ItemContainer from "../ItemContainer";
import styled from "styled-components";

import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";

const TransferForm = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>Transfer</div>
        <Input title="Transfer to" placeholder="email@email.com" />
        <Input title="Amount" placeholder="0.00$" />

        <Flex>
          <Input title="Pin" placeholder="****" />
          <Button title="transfer" />
        </Flex>
      </div>
    </ItemContainer>
  );
};

export default TransferForm;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
`;
