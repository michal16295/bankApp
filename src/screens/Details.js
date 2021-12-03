import styled from "styled-components";

const Details = () => {
  return (
    <Container>
      <Title>Details</Title>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
