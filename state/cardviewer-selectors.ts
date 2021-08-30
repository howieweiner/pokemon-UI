import { CardViewerState } from './store'
import { Pokemon, PokemonId } from '../types/pokemon'

const MIN_POKEMON_ID = 1
const MAX_POKEMON_ID = 151

export const isInitialised = (state: CardViewerState): boolean => state.isInitialised

export const isLoading = (state: CardViewerState): boolean => state.isLoading

export const hasErrored = (state: CardViewerState): boolean => state.hasErrored

export const getPokemonIdForNumber = (state: CardViewerState, number: string): string | undefined => {
  if (!state.pokemonIds) return
  const pokemonIds: PokemonId[] = state.pokemonIds.filter((pi) => parseInt(pi.number) === parseInt(number))
  if (pokemonIds.length > 0) {
    return pokemonIds[0].id
  }
}

export const hasPokemon = (state: CardViewerState): boolean => state.pokemon !== undefined

export const getPokemon = (state: CardViewerState): Pokemon | undefined => state.pokemon

export const hasPrevious = (state: CardViewerState): boolean => {
  if (state.pokemon) {
    return parseInt(state.pokemon.number) > MIN_POKEMON_ID
  }
  return false
}

export const hasNext = (state: CardViewerState): boolean => {
  if (state.pokemon) {
    return parseInt(state.pokemon.number) < MAX_POKEMON_ID
  }
  return false
}

export const getPreviousNumber = (state: CardViewerState): string | undefined => {
  if (state.pokemon) {
    const current = parseInt(state.pokemon.number)
    if (current > MIN_POKEMON_ID) {
      return (current - 1).toString()
    }
  }
}

export const getNextNumber = (state: CardViewerState): string | undefined => {
  if (state.pokemon) {
    const current = parseInt(state.pokemon.number)
    if (current < MAX_POKEMON_ID) {
      return (current + 1).toString()
    }
  }
}
