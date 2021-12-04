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
    {
      title: "History",
      route: routes.HISTORY,
      icon: assets.historyIcon,
    },
    {
      title: "Details",
      route: routes.DETAILS,
      icon: assets.detailIcon,
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
    <Route
      key="History"
      exact
      path={routes.HISTORY}
      element={<screens.History />}
    />,
    <Route
      key="Details"
      exact
      path={routes.DETAILS}
      element={<screens.Details />}
    />,
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
