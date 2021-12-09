import ItemContainer from "../ItemContainer";
import styled from "styled-components";

const Card = () => {
  return (
    <ItemContainer >
      <Container>
        <div>My Card</div>
        <Circle />

        <Content>
          <div>1234 **** **** ****</div>
          <Flex>
            <div>Michal Barski</div>
            <div>05/26</div>
          </Flex>
        </Content>
      </Container>
    </ItemContainer>
  );
};

export default Card;
const Container = styled.div`
  background: linear-gradient(60deg, #007eff, #8fc2f5);
  height: 100%;
  border-radius: 24px;
  padding: 20px;
  position: relative;
  color: white;
`;

const Circle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light.background};
  opacity: 0.3;
  position: absolute;
  bottom: 60px;
  right: -10px;
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
`;
