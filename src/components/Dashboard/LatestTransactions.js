import ItemContainer from "../ItemContainer";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const LatestTransactions = ({ title, data }) => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>{title}</div>
        <div>
          {data.map((item) => {
            return (
              <MainFlex>
                <InnerFlex>
                  <Box rise={item.rise}>
                    {item.rise ? (
                      <BsArrowUpRight color="#007EFF" />
                    ) : (
                      <BsArrowDownRight color="#F04343" />
                    )}
                  </Box>
                  <div>
                    <Title>{item.title}</Title>
                    <SubTitle>{item.date}</SubTitle>
                  </div>
                </InnerFlex>
                <Sum rise={item.rise}>
                  {item.rise ? "+$" + item.difference : "-$" + item.difference}
                </Sum>
              </MainFlex>
            );
          })}
        </div>
      </div>
    </ItemContainer>
  );
};

export default LatestTransactions;

const MainFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${({ rise }) =>
    rise ? "rgba(0, 126, 255, 0.1)" : "rgba(240, 67, 67, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const Title = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.light.secondFont};
  font-weight: 400;
`;

const Sum = styled.div`
  font-size: 16px;
  color: ${({ rise, theme }) =>
    rise ? theme.colors.light.blue : theme.colors.light.red};
`;
