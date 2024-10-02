"use client";

import React from "react";
import { PokemonGrid } from "./pokmeon-grid";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemonGrid = () => {
  const pokemons = useAppSelector((state) =>
    Object.values(state.pokemons).filter(Boolean)
  );
  if (!pokemons.length)
    return (
      <div className="flex flex-col h-[50hx] items-center justify-center">
        <IoHeartOutline size={100} />
        <span>There are no favorites</span>
      </div>
    );

  return <PokemonGrid pokemons={pokemons} />;
};
