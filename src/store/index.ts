import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import pokemonsReducer from "./pokemons/pokemons";
import { localStorageMiddleware } from "./middlewares/localstorage.middleware";

export const store = configureStore({
  reducer: {
    counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
