import React from "react";
//import Login from './pages/login';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubForm from "./components/subForm";
import Login from "./pages/login";
import SubsList from "./pages/subsList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Routes>
            <Route element={<Login />} path="/"></Route>
          </Routes>
          <Routes>
            <Route element={<SubForm />} path="/create-subsidies"></Route>
          </Routes>
          <Routes>
            <Route element={<SubsList />} path="/view-subsidies"></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
