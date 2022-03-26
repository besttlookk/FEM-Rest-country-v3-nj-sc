import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  :root {
  --col-dm-bg: hsl(207, 26%, 17%);
  --col-lm-bg: hsl(0, 0%, 98%);
  --col-dm-secondary: hsl(209, 23%, 22%);
  --col-lm-secondary: hsl(0, 0%, 100%);
  --col-dark-gray: hsl(0, 0%, 52%);
  --col-dm-text:hsl(0, 0%, 100%);
  --col-lm-text:hsl(200, 15%, 8%);

  --shadow-md: box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);;

  --font-primary: "Nunito Sans", sans-serif;

  --text-2xl:font-size: 1.5rem; 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: hsl(0, 0%, 52%);
  }
  ::-webkit-scrollbar-thumb {
    background-color:hsl(0, 0%, 100%);
    border-radius: .5rem;
  }

html {
  box-sizing: border-box;
  font-size: 100%;
  scroll-behavior: smooth;

}

body {
  min-height: 100vh;
  font-family: var(--font-primary);
  background-color: ${(props) => props.theme.bodyBg};
}

a{
  text-decoration: none;
}
`;
