import { FavoritePokemonGrid } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites Pokemons",
  description: "Favorites Pokemons",
};

export default async function FavoritesPokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Favorites Pokemons</span>
      <FavoritePokemonGrid />
    </div>
  );
}
