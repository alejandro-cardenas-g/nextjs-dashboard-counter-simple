import { PokemonGrid } from "@/components";
import { PokemonsResponse } from "./interfaces/pokemons-response";
import { ISinglePokemon } from "./interfaces/single-pokemon";
import { Metadata } from "next";

const getPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<ISinglePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) ?? "",
    name: pokemon.name,
  }));
};

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Pokemons list",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(100);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons list</span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
