import { ThemeProvider } from "styled-components";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";

import Home from "./screens/Home";

import routes from "./routes";
import theme from "./theme";

const App = () => {
  const publicRoutes = [
    <Route key="Home" exact path={routes.HOME} element={<Home />} />,
  ];
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>{publicRoutes}</Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
