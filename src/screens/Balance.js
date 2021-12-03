import styled from "styled-components";

const Balance = () => {
  return (
    <Container>
      <Title>Balance</Title>
    </Container>
  );
};

export default Balance;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
