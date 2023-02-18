// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    buttonImages: string; 
    buttonMobile: string;
    delDeskButton: string;
    delMobileButton: string;
    resetDeskButton: string;
    resetMobileButton: string;
    equalDeskButton: string;
    equalMobileButton: string;
    colors: {
      main: string;
      secondary: string;
      background: string;
      calculator: string;
      display: string;
      displayBorder: string;
      displayFontColor: string;
      numberPadColor: string;
      memory: string;
      operators: string;
      numbers: string;
      calculate: string;
    };

    test: string;
  }
}
