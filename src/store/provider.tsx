"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from ".";

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
