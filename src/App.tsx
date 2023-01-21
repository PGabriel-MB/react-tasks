import React from "react";

import { AppRoutes } from "./routes";
import GlobalStyles from "./GlobalStyles";

const App: React.FC  = () =>{
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  )
}

export default App
