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

// console.log(DefaultTheme);
const theme2: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",

  colors: {
    main: "#D2CDCD",
    secondary: "#000",
    background: "#E5E4E1",
    calculator: "#2D2D2D",
    display: "#EEEEEE",
    displayBorder: "#D2CDCD",
    memory: "#21392D",
    operators: "#5E473A",
    numbers: "#09090A",
    calculate: "#FFCF79"
  }
};

const theme3: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",

  colors: {
    main: "#331C4D",
    secondary: "#000",
    background: "#17062A",
    calculator: "#2D2D2D",
    display: "#1E0936",
    displayBorder: "#331C4D",
    memory: "#21392D",
    operators: "#5E473A",
    numbers: "#09090A",
    calculate: "#FFCF79"
  }
};
export { theme3, theme2, theme };
