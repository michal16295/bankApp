import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const SideBar = ({ actions }) => {
  const location = useLocation();
  return (
    <Container>
      <Flex>
        <Logo>B</Logo>
        <div>Bayar</div>
      </Flex>
      <Links>
        {actions.map((item) => {
          return (
            <LinkItem
              to={item.route}
              selected={location.pathname === item.route}
            >
              <Icon>
                <img src={item.icon} />
              </Icon>
              <CustomLink selected={location.pathname === item.route}>
                {item.title}
              </CustomLink>
            </LinkItem>
          );
        })}
      </Links>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light.sideBar};
  max-width: 320px;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 36px;
  column-gap: 15px;
  padding: 40px;
`;

const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.light.blue};
  height: 52px;
  width: 52px;
  border-radius: 6px;
  line-height: 52px;
  color: white;
  text-align: center;
`;

const Links = styled.div`
  margin-top: 30px;
`;

const LinkItem = styled(Link)`
  display: flex;
  padding: ${({ selected }) => (selected ? "0 32px" : "0 40px")};
  align-items: center;
  margin: auto;
  height: 66px;
  column-gap: 30px;
  text-decoration: none;
  cursor: pointer;
  border-left: ${({ selected }) => selected && "8px solid rgb(0, 126, 255)"};
  background: ${({ selected }) => selected && "rgba(0, 126, 255, 0.05)"};
  &:hover {
    background: rgba(0, 126, 255, 0.05);
  }
`;

const Icon = styled.div`
  height: 29px;
  width: 29px;
`;

const CustomLink = styled.div`
  font-size: 18px;
  font-weight: ${({ selected }) => (selected ? "bold" : "400")};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.light.blue : theme.colors.light.secondFont};
`;
