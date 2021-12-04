import ItemContainer from "../ItemContainer";
import { AiOutlineDollarCircle } from "react-icons/ai";
import styled from "styled-components";

const data = [
  {
    difference: 44,
    title: "Template Design",
    subtitle: "$50 / from $1000",
    date: "2 March 2021",
  },
  {
    difference: 44,
    title: "Wordpress",
    subtitle: "$50 / from $1000",
    date: "2 March 2021",
  },
  {
    difference: 44,
    title: "Client Side",
    subtitle: "$50 / from $1000",
    date: "2 March 2021",
  },
  {
    difference: 44,
    title: "Server",
    subtitle: "$50 / from $1000",
    date: "2 March 2021",
  },
];

const Earnings = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Earnings Categories</div>
        {data.map((item) => {
          return (
            <MainFlex>
              <InnerFlex>
                <Box>
                  <AiOutlineDollarCircle size={30} color="#007EFF" />
                </Box>
                <div>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.subtitle}</SubTitle>
                </div>
              </InnerFlex>
              <Sum>${item.difference}</Sum>
            </MainFlex>
          );
        })}
      </div>
    </ItemContainer>
  );
};

export default Earnings;
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
  background: rgba(0, 126, 255, 0.1);
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
  height: 40px;
  width: 70px;
  border-radius: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light.blue};
  background: rgba(0, 126, 255, 0.1);
  text-align: center;
  line-height: 40px;
`;
