import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <>
      {navigation.state === "loading" && <div>loading...........</div>}
      <Outlet />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          bottom: "0",
          left: "0",
          position: "fixed",
          width: "100%",
          height: "56px",
          borderTop: "1px solid #000",
        }}
      >
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
          to={"/"}
        >
          홈
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
              fontWeight: isPending ? "bold" : "normal",
            };
          }}
          to={"/user"}
        >
          유저
        </NavLink>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "red" : "black",
            };
          }}
          to={"/filter"}
        >
          필터
        </NavLink>
      </div>
    </>
  );
}
