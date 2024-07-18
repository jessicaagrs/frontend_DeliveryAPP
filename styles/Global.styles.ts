import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-poppins);
  }

  :root {
    --font-weight-light: 100;
    --font-weight-regular: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  body {
    background-color: ${props => props.theme.colors.background}; 
    display: ${props => props.theme.display};
    overflow: ${props => props.theme.overflow};
    height: 100%;
  }

  main {
    margin: ${props => props.theme.spacing.margin};
    width: 100%;
  }
`;

export const theme = {
    colors: {
        backgroundGreen: "#22C7A9",
        backgroundGreenLight: "#D7EFE6",
        backgroundGray: "#F3F3F3",
        backgroundSidebar: "#236969",
        buttonGray: "#DADADA",
        buttonGreen: "#2DB6A3",
        buttonPeach: "#DFB497",
        textWhite: "#FFFFFF",
        textInputGray: "#666161",
        textGray: "#464444",
        textLink: "#2D2626",
        textError: "#FF0000",
        textCard: "#393939",
        icons: "#666666",
        iconSidebar: "#7C7C7A",
    },
};

export const customThemeLogin = {
    ...theme,
    colors: {
        ...theme.colors,
        background: "#22C7A9",
    },
    spacing: {
        margin: "0 0 0 0",
    },
    display: "initial",
    overflow: "hidden"
};

export const customThemeSystem = {
    ...theme,
    colors: {
        ...theme.colors,
        background: "#D7EFE6",
    },
    spacing: {
        margin: "0 20rem 0 20rem",
    },
    display: "flex",
    overflow: "visible"
};
