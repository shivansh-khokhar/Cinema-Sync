import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  fontFamily: "Roboto, sans-serif",
  mainColors: {
    blue: "#67009E",
    gray: "#c6c6c6",
    dark: "#EDEBEB",
  },
};



const GlobalStyle = createGlobalStyle`body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 18px;
    margin: 0px;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #0c0c1d;
    color: #EDEBEB;
}`;

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {children}
    </ThemeProvider>
  );
};
