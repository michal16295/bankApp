import styled from "styled-components";

const Card = () => {
  return (
    <Container>
      <Title>Card</Title>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
