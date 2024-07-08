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
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.background}; 
  }
`;

export const theme = {
	colors: {
		backgroundGreen: "#22C7A9",
		backgroundGray: "#E5E5E5",
		buttonGray: "#DADADA",
		buttonGreen: "#2DB6A3",
		buttonPeach: "#DFB497",
		textWhite: "#FFFFFF",
		textInputGray: "#666161",
		textGray: "#464444",
		textLink: "#2D2626",
		textError: "#FF0000",
		icons: "#666666"
	},
};

export const customThemeLogin = {
	...theme,
	colors: {
		...theme.colors,
		background: "#22C7A9",
	},
};

export const customThemeSystem = {
	...theme,
	colors: {
		...theme.colors,
		background: "#E5E5E5",
	},
};
