import styled from "styled-components";
import { FaSearch, FaMail } from "react-icons/fa";
import { FiMail, FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <SearchContainer>
        <Input placeholder="Search..." />
        <FaSearch />
      </SearchContainer>

      <Actions>
        <FiMail size={25} />
        <FiBell size={25} />
        <div>
          <Flex>
            <Avatar />
            <div>
              <Username>Michal Barski</Username>
              <Email>michal@gmail.com</Email>
            </div>
          </Flex>
        </div>
      </Actions>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  height: 20px;
  width: 40%;
  background: ${({ theme }) => theme.colors.light.sideBar};
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
`;

const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  flex: 1;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const Avatar = styled.div`
  background-color: #dddddd;
  height: 48px;
  width: 48px;
  border-radius: 16px;
`;

const Username = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;

const Email = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light.secondFont};
`;
