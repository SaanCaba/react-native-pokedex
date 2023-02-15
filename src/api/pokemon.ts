import { PokemonModel } from "../models/pokemon.model";
import { apiUrl } from "../utils/constants";

export async function getAllPokemons() {
  try {
    const response = await fetch(apiUrl + "/pokemon?limit=20&offset=0");
    const data = await response.json();
    return data;
  } catch (error) {}
}

export async function getPokemonDeatils(url: string) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
