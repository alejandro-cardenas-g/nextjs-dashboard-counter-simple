import { ISinglePokemon } from "@/app/dashboard/pokemons/interfaces/single-pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

type Props = {
  pokemon: ISinglePokemon;
};

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {pokemon.id}
          </p>
          <p className="text-sm text-gray-100 capitalize">{pokemon.name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${pokemon.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info.
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="flex flex-col items-center justify-center text-green-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
