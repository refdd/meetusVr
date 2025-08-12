// App.jsx
import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import router from "./routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7A3AF9",
      dark: "#5B2BD3",
      light: "#A78BFA",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E879F9",
      dark: "#C026D3",
      light: "#F5D0FE",
      contrastText: "#0F172A",
    },
    text: {
      primary: "#0F172A",
      secondary: "#6B7280",
    },
    background: {
      default: "#F4F2FF",
      paper: "#FFFFFF",
    },
    divider: "#E5E7EB",
    info: { main: "#6B7280" },
    success: { main: "#22C55E" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
  },
});

function App() {
  const { checkAuth, checkingAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) return <LoadingSpinner />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
