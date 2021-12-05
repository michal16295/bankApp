import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const SendInvoice = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>Send Invoice</div>
        <Label>Choose Service</Label>
        <InputContainer>
          <Input placeholder="Web Design" />
        </InputContainer>
        <Label>Amount</Label>
        <InputContainer>
          <Input placeholder="0.00$" />
        </InputContainer>
        <Label>Recipient</Label>
        <InputContainer>
          <Input placeholder="Insert Email" />
        </InputContainer>

        <Button>Send</Button>
      </div>
    </ItemContainer>
  );
};

export default SendInvoice;

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
  width: 100%;
`;
