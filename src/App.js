import styled, { ThemeProvider } from "styled-components";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import assets from "./assets";
import screens from "./screens";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import routes from "./routes.json";
import theme from "./theme";

const App = () => {
  const actions = [
    {
      title: "Dashboard",
      route: routes.HOME,
      icon: assets.dashIcon,
    },
    {
      title: "Balance",
      route: routes.BALANCE,
      icon: assets.balanceIcon,
    },
    {
      title: "Invoice",
      route: routes.INVOICE,
      icon: assets.invoiceIcon,
    },
    {
      title: "Card",
      route: routes.CARD,
      icon: assets.cardIcon,
    },
  ];
  const publicRoutes = [
    <Route key="Home" exact path={routes.HOME} element={<screens.Home />} />,
    <Route
      key="Balance"
      exact
      path={routes.BALANCE}
      element={<screens.Balance />}
    />,
    <Route
      key="Invoice"
      exact
      path={routes.INVOICE}
      element={<screens.Invoice />}
    />,
    <Route key="Card" exact path={routes.CARD} element={<screens.Card />} />,
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <SideBar actions={actions} />
          <div style={{ padding: "40px", width: "100%", overflow: "auto" }}>
            <Header />
            <Routes>{publicRoutes}</Routes>
          </div>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.light.background};
  height: 100%;
  position: relative;
  display: flex;
`;
