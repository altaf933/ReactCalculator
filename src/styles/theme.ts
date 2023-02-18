// my-theme.ts
import { DefaultTheme } from "styled-components";
import number_btn from '../images/number_btn.png';
import themeTwoButton from '../images/themeTwoButton.png';
import themeThreeDeskButton from '../images/themeThreeDeskButton.png';
import themeThreeMobileButton from '../images/themeThreeMobileButton.png';
import themeTwoButtonMobile from '../images/themeTwoButtonMobile.png';
import mobileGrayButton from '../images/mobileGrayButton.png';

import red_rect from '../images/red_rect.png';
import rectangleBlueMobile from '../images/rectangleBlueMobile.png';
import blue_rect from '../images/blue_rect.png';
import rectangleRed from '../images/rectangleRed.png';
import del from '../images/del.png';
import mobileBlueButton from '../images/mobileBlueButton.png';


import themeTwoDeskReset from '../images/themeTwoDeskReset.png';
import themeTwoMobileReset from '../images/themeTwoMobileReset.png';

import themeTwoDeskDel from '../images/themeTwoDeskDel.png';
import themeTwoMobileDel from '../images/themeTwoMobileDel.png';

import themeTwoDeskEqual from '../images/themeTwoDeskEqual.png';
import themeTwoMobileEqual from '../images/themeTwoMobileEqual.png';


import themeThreeDeskReset from '../images/themeThreeDeskReset.png';
import themeThreeMobileReset from '../images/themeThreeMobileReset.png';

import themeThreeDeskEqual from '../images/themeThreeDeskEqual.png';
import themeThreeMobileEqual from '../images/themeThreeMobileEqual.png';


import themeThreeDeskDel from '../images/themeThreeDeskDel.png';
import themeThreeMobileDel from '../images/themeThreeMobileDel.png';
const theme: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",
  buttonImages: number_btn,
  buttonMobile: mobileGrayButton,
    resetDeskButton: blue_rect,
    resetMobileButton: rectangleBlueMobile,
    delDeskButton: del,
    delMobileButton:mobileBlueButton,
    equalDeskButton: red_rect,
    equalMobileButton: rectangleRed,
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
    calculate: "#FFCF79",
    displayFontColor: "#FFFFFF",
    numberPadColor: "#434A59",
  }
};

// console.log(DefaultTheme);
const theme2: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",
  buttonImages: themeTwoButton,
  buttonMobile: themeTwoButtonMobile,
    resetDeskButton: themeTwoDeskReset,
    resetMobileButton: themeTwoMobileReset,
    delDeskButton: themeTwoDeskDel,
    delMobileButton: themeTwoMobileDel,
    equalDeskButton: themeTwoDeskEqual,
    equalMobileButton: themeTwoMobileEqual,
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
    calculate: "#FFCF79",
    displayFontColor: "#36362C",
    numberPadColor: "#434A59"
  }
};

const theme3: DefaultTheme = {
  test: "" /* bug with 'styled-components? */,

  borderRadius: "5px",
  buttonImages: themeThreeDeskButton,
  buttonMobile: themeThreeMobileButton,
    resetDeskButton: themeThreeDeskReset,
    resetMobileButton: themeThreeMobileReset,
    equalDeskButton: themeThreeDeskEqual,
    equalMobileButton: themeThreeMobileEqual,
    delDeskButton: themeThreeDeskDel,
    delMobileButton: themeThreeMobileDel,
  colors: {
    main: "#331C4D",
    secondary: "#000",
    background: "#17062A",
    calculator: "#2D2D2D",
    display: "#1E0936",
    displayBorder: "#1E0936",
    memory: "#21392D",
    operators: "#5E473A",
    numbers: "#09090A",
    calculate: "#FFCF79",
    displayFontColor: "#FFE53D",
    numberPadColor: "#FFE53D"
  }
};
export { theme3, theme2, theme };
