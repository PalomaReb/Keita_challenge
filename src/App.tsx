import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SubsList from "./pages/listSubsidies";
import CreateSubsidy from "./pages/createSubsidy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/create-subsidies" element={<CreateSubsidy />} />
            <Route path="/view-subsidies" element={<SubsList />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
