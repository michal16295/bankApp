import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const Table = ({ title, data }) => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>{title}</div>
      </div>
    </ItemContainer>
  );
};

export default Table;
