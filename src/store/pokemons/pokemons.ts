import { ISinglePokemon } from "@/app/dashboard/pokemons/interfaces/single-pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPokemonsState {
  [key: string]: ISinglePokemon;
}

// const getInitialState = (): IPokemonsState => {
//   return JSON.parse(localStorage.getItem("pokemons") || "{}") as IPokemonsState;
// };

const initialState: IPokemonsState = {};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toogleFavorite: (state, action: PayloadAction<ISinglePokemon>) => {
      const pokemon = action.payload;
      const exists = Boolean(state[pokemon.id]);

      if (exists) {
        delete state[pokemon.id];
        return;
      } else {
        state[pokemon.id] = pokemon;
      }
    },
  },
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
