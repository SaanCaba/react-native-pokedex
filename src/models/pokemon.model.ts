export interface PokemonModel {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonModel>;
}

export interface PokemonComponent {
  id: number;
  image: string;
  name: string;
  order: number;
  type: string;
}
