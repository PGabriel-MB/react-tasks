import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: rgba(255, 255, 255, 0.87);
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /* Colors */
  --primary: #47c2b1;
  --green-clean: #A3EBE1;
  --green-dark: #4ea095;
}

#root {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;

  > div {
    width: 100%;
  }
}

body {
  margin: 0;
  background: radial-gradient(102.8% 100% at 11.200000000000001% 23%, var(--primary) 0%, rgb(24, 73, 66) 100%);
}

button:focus, input:focus {
  outline: none;
}

:root {
  /* Colors */
  --primary: #47c2b1;
  --green-clean: #A3EBE1;
  --green-dark: #4ea095;
	background-color: var(--white);
  --white: #ebe9e9;
}
`;
