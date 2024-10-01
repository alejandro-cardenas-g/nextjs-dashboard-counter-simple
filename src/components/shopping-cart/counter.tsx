"use client";
import React, { useState } from "react";

type Props = {
  initialValue: number;
};

export const CartCounter: React.FC<Props> = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => setCounter((prev) => prev - 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
