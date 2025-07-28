import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";  

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <CssBaseline /> 
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
