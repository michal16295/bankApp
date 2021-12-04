import ItemContainer from "../ItemContainer";
import { SiFreelancer } from "react-icons/si";
import { FaSuitcase } from "react-icons/fa";
import styled from "styled-components";

const data = [
  {
    difference: 10000,
    title: "Salary",
    subtitle: "Current Job",
    icon: <FaSuitcase size={25} color="#007EFF" />,
  },
  {
    difference: 5000,
    title: "Wordpress",
    subtitle: "Freelance",
    icon: <SiFreelancer size={25} color="#007EFF" />,
  },
];

const EarningsSources = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Earnings Categories</div>
        {data.map((item) => {
          return (
            <MainFlex>
              <InnerFlex>
                <Box>{item.icon}</Box>
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

export default EarningsSources;
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
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light.blue};
  text-align: center;
  line-height: 40px;
`;
