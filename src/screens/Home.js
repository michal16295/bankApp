import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
