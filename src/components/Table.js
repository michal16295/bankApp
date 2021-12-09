import { useState } from "react";
import ItemContainer from "./ItemContainer";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Table = ({ title, data, cols }) => {
  const [checkedObj, setCheckedObj] = useState({});

  return (
    <ItemContainer flex="2 1 300px">
      <div style={{ padding: "20px 0" }}>
        <div style={{ padding: "20px 0 20px 20px" }}>{title}</div>
        <Row>
          <CheckBox />
          {cols?.map((col) => {
            return <ColItem>{col.title}</ColItem>;
          })}
        </Row>
        {data?.map((item, index) => {
          return (
            <Row last={index === data.length - 1}>
              <CheckBox
                onClick={() =>
                  setCheckedObj({
                    ...checkedObj,
                    [item.id]: !checkedObj[item.id],
                  })
                }
              >
                {checkedObj[item.id] && <FaCheck color="#007EFF" />}
              </CheckBox>
              {cols.map((col) => {
                return (
                  <ColItem
                    color={col.color}
                    status={col.title === "status" && item.status === "unpaid"}
                  >
                    {item[col.title]}
                  </ColItem>
                );
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
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  border-bottom: ${({ last }) => !last && "1px solid #dddddd"};
  padding: 20px;
`;

const ColItem = styled.div`
  color: ${({ theme, color, status }) =>
    status ? theme.colors.light.red : theme.colors.light[color]};
  font-weight: 400;
  font-size: 16px;
  flex: 1;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  min-width: 65px;
  line-height: 30px;
`;
