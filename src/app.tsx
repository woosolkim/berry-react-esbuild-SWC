import { Route, Routes } from "react-router-dom";

import React, { Suspense } from "react";
import Home from "./pages/home";
import User from "./pages/user";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/user"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <User />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
