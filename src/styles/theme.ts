// my-theme.ts
import { DefaultTheme } from "styled-components";
// console.log(DefaultTheme);
const theme: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",

  colors: {
    main: "#F8F8F8",
    secondary: "#000",
    background: "#434A59",
    calculator: "#2D2D2D",
    display: "#181F33",
    displayBorder: "#181F33",

    memory: "#21392D",
    operators: "#5E473A",
    numbers: "#09090A",
    calculate: "#FFCF79"
  }
};

export { theme };
