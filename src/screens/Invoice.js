import styled from "styled-components";

const Invoice = () => {
  return (
    <Container>
      <Title>Invoice</Title>
    </Container>
  );
};

export default Invoice;

const Container = styled.div`
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;
