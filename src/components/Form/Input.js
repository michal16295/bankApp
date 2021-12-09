import styled from "styled-components";

const Input = ({ title, placeholder }) => {
  return (
    <div>
      <Label>{title}</Label>
      <InputContainer>
        <InputInner placeholder={placeholder} />
      </InputContainer>
    </div>
  );
};

export default Input;

const Label = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.light.background};
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 20px;
`;
const InputInner = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
`;
