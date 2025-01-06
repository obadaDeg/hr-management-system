import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./themes";

function App() {
  // const theme = 'light'

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
