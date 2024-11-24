"use client";
import { Children, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "lib/store";

const StoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    console.log("storeRef.current");
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
