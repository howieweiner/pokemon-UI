export interface PokemonId {
  id: string
  number: string
}

export interface Pokemon {
  number: string
  name: string
  image: string
  resistant: string[]
  weaknesses: string[]
  fastAttacks: string[]
  specialAttacks: string[]
}

export interface Attack {
  name: string
  type: string
  damage: number
}

export interface PokemonApiResponse {
  number: string
  name: string
  image: string
  resistant: string[]
  weaknesses: string[]
  attacks: {
    fast: Attack[]
    special: Attack[]
  }
}
