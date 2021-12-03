import styled from "styled-components";

const History = () => {
  return (
    <Container>
      <Title>History</Title>
    </Container>
  );
};

export default History;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
