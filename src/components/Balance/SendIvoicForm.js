import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";

const SendInvoice = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>Send Invoice</div>
        <Input title="Choose Service" placeholder="Web Design" />
        <Input title="Amount" placeholder="0.00$" />
        <Input title="Recipient" placeholder="Insert Email" />

        <Button title="send" />
      </div>
    </ItemContainer>
  );
};

export default SendInvoice;
