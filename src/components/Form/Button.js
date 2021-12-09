import styled from "styled-components";

const Button = ({ title, onPress }) => {
  return <Container>{title}</Container>;
};
export default Button;

const Container = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.light.blue};
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  flex: 1;
  height: 50px;
  margin-top: 5px;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);

  &:hover {
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.16);
  }
`;
