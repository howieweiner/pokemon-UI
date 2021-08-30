// action types
import { Pokemon, PokemonId } from '../types/pokemon'

export const ACTION_INITIALISE = 'ACTION_INITIALISE'
export const ACTION_INITIALISE_SUCCESS = 'ACTION_INITIALISE_SUCCESS'
export const ACTION_INITIALISE_ERROR = 'ACTION_INITIALISE_ERROR'
export const ACTION_FETCH_ITEM = 'ACTION_FETCH_ITEM'
export const ACTION_FETCH_ITEM_SUCCESS = 'ACTION_FETCH_ITEM_SUCCESS'
export const ACTION_FETCH_ITEM_ERROR = 'ACTION_FETCH_ITEM_ERROR'

type ActionType =
  | typeof ACTION_INITIALISE_SUCCESS
  | typeof ACTION_INITIALISE_ERROR
  | typeof ACTION_INITIALISE
  | typeof ACTION_FETCH_ITEM
  | typeof ACTION_FETCH_ITEM_SUCCESS
  | typeof ACTION_FETCH_ITEM_ERROR

export type CardViewerAction = {
  type: ActionType
  pokemon?: Pokemon
  pokemonIds?: PokemonId[]
}
