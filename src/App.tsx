import React from 'react';
//import Login from './pages/login';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "./theme/theme";
import { Container } from "@material-ui/core";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import SubForm from './components/subForm';



function App() {

  return (
        <ThemeProvider theme={theme}>
          <Container>
          <SubForm></SubForm>
        {/* <Router>
          <Routes>
            <Route element={<Login/>} path="/">
              </Route>
              </Routes>
            </Router> */}
            </Container>
      </ThemeProvider>
  );
}


export default App;
