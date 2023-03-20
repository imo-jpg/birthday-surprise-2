import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from "./routing/Router";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRouter />
    </BrowserRouter>
  );
}

