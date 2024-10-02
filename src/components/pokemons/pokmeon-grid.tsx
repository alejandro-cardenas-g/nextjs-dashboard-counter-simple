import { ISinglePokemon } from "@/app/dashboard/pokemons/interfaces/single-pokemon";
import React from "react";
import { PokemonCard } from "./pokemon-card";

type Props = {
  pokemons: ISinglePokemon[];
};

export const PokemonGrid: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};
