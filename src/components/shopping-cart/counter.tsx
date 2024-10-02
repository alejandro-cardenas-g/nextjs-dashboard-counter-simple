"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import React, { useEffect } from "react";

type Props = {
  initialValue: number;
};

interface ICounterResponse {
  counter: number;
}

const getApiCounter = async () => {
  const data: ICounterResponse = await fetch("/api/counter").then((result) =>
    result.json()
  );
  return data;
};

export const CartCounter: React.FC<Props> = ({ initialValue }) => {
  const counter = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then((result) =>
      dispatch(initCounterState(result.counter))
    );
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
