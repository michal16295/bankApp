import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const Table = ({ title, data, cols }) => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px 0" }}>
        <div style={{ padding: "20px 0 0 20px" }}>{title}</div>
        <Row>
          <CheckBox />
          {cols.map((col) => {
            return <ColItem>{col}</ColItem>;
          })}
        </Row>
        {data.map((item, index) => {
          return (
            <Row last={index === data.length - 1}>
              <CheckBox />
              {cols.map((col) => {
                return <ColItem>{item[col]}</ColItem>;
              })}
            </Row>
          );
        })}
      </div>
    </ItemContainer>
  );
};

export default Table;

const CheckBox = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 5px;
  border: 1px solid #dddddd;
`;

const Row = styled.div`
  margin-top: 20px;
  display: flex;
  column-gap: 20px;
  align-items: center;
  border-bottom: ${({ last }) => !last && "1px solid #dddddd"};
  padding: 20px;
`;

const ColItem = styled.div`
  color: ${({ theme }) => theme.colors.light.secondFont};
  font-weight: 400;
  font-size: 16px;
  flex: 1;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  min-width: 75px;
`;
