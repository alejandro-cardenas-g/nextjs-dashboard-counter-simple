import { Action, Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";
import { toogleFavorite } from "../pokemons/pokemons";

export const localStorageMiddleware: Middleware = (api) => (next) => {
  return (action) => {
    next(action);
    if ((action as Action).type === toogleFavorite.type) {
      const state = api.getState() as RootState;
      localStorage.setItem("pokemons", JSON.stringify(state.pokemons));
    }
  };
};
