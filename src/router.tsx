import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import React, { Suspense } from "react";
import Home from "./pages/home";
import User, { HelloResponse, fetchUser } from "./pages/user";
import Layout from "./component/layout";
import { useQuery } from "react-query";
import Filter from "./pages/filter";

const END_POINT = "http://localhost:4000";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route
          loader={async () => {
            // const respopnse = await fetch(`${END_POINT}/hello`);
            const user = {
              message: "hello",
              date: new Date().toISOString(),
            };

            return user;
          }}
          path="/"
          element={<Home />}
        />
        <Route
          path="/user"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <User />
            </Suspense>
          }
        />
        <Route path="/filter" element={<Filter />} />
      </Route>
    </>
  )
);

export default router;
