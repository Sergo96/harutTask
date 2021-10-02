import React from 'react';
import { Provider } from "react-redux";

import { GlobalStyles } from "./GlobalStyles";
import { Routes } from "../routes";
import { store } from "../redux";

function App() {
  return (
    <Provider store={store}>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <GlobalStyles />
        <Routes />
    </Provider>
  );
}

export default App;
