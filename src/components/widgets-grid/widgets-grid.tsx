"use client";

import React from "react";
import { SimpleWidget } from "../simple-widget/simple-widget";
import { IoCafeOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counterReducer.counter);
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        icon={<IoCafeOutline size={50} />}
        href="/dashboard/counter"
        label="Counter"
        subtitle="Added products"
        title={`${counter}`}
      />
    </div>
  );
};
