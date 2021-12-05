import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const TransferForm = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>Transfer</div>
        <Label>Transfer to</Label>
        <InputContainer>
          <Input placeholder="email@email.com" />
        </InputContainer>
        <Label>Amount</Label>
        <InputContainer>
          <Input placeholder="0.00$" />
        </InputContainer>
        <Label>Pin</Label>
        <Flex>
          <InputContainer>
            <Input placeholder="****" />
          </InputContainer>
          <Button>Transfer</Button>
        </Flex>
      </div>
    </ItemContainer>
  );
};

export default TransferForm;

const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light.background};
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
`;

const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.light.blue};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  flex: 1;
  height: 50px;
  margin-top: 5px;
  cursor: pointer;
`;