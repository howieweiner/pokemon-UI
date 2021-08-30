import { Pokemon, PokemonId } from '../types/pokemon'

export type CardViewerState = {
  isInitialised: boolean
  isLoading: boolean
  hasErrored: boolean
  hasPrevious: boolean
  hasNext: boolean
  pokemon?: Pokemon
  pokemonIds?: PokemonId[]
}

export const buildInitialState = (): CardViewerState => ({
  isInitialised: false,
  isLoading: false,
  hasErrored: false,
  hasPrevious: false,
  hasNext: false,
})
