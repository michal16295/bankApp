import ItemContainer from "../ItemContainer";
import { BiMessageDetail } from "react-icons/bi";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const data = [
  {
    name: "Samantha William",
  },
  {
    name: "Smith Werben",
  },
  {
    name: "Noah Arc",
  },
  {
    name: "Elizabeth March",
  },
];

const FriendsList = () => {
  return (
    <ItemContainer>
      <div style={{ padding: "20px" }}>
        <div>Friends List</div>
        <SearchContainer>
          <Input placeholder="Search..." />
          <FaSearch />
        </SearchContainer>
        {data.map((item) => {
          return (
            <MainFlex>
              <InnerFlex>
                <Avatar />
                <Title>{item.name}</Title>
              </InnerFlex>
              <BiMessageDetail color="#007EFF" size={30} />
            </MainFlex>
          );
        })}
      </div>
    </ItemContainer>
  );
};

export default FriendsList;
const MainFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Avatar = styled.div`
  background-color: #dddddd;
  height: 42px;
  width: 40px;
  border-radius: 16px;
`;

const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light.mainFont};
`;

const SearchContainer = styled.div`
  height: 20px;
  background: #f0f5fa;
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  flex: 1;
`;
