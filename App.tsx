import React from "react";
import Routes from "./src/Routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
