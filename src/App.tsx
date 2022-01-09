import React from 'react';
import Login from './pages/login';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./theme/theme"
import { Header } from './components/header';



function App() {

  return (
        <ThemeProvider theme={theme}>
          {/* <Header></Header> */}
        <Login/>

      </ThemeProvider>
  );
}


export default App;
