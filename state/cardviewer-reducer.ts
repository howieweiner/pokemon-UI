import { CardViewerState } from './store'
import {
  ACTION_FETCH_ITEM,
  ACTION_FETCH_ITEM_ERROR,
  ACTION_FETCH_ITEM_SUCCESS,
  ACTION_INITIALISE,
  ACTION_INITIALISE_ERROR,
  ACTION_INITIALISE_SUCCESS,
  CardViewerAction,
} from './cardviewer-actions'

export const cardviewerReducer = (state: CardViewerState, action: CardViewerAction): CardViewerState => {
  switch (action.type) {
    case ACTION_INITIALISE:
      return {
        ...state,
        isLoading: true,
        hasErrored: false,
      }

    case ACTION_INITIALISE_SUCCESS:
      return {
        ...state,
        isInitialised: true,
        isLoading: false,
        hasErrored: false,
        pokemonIds: action.pokemonIds,
      }

    case ACTION_INITIALISE_ERROR:
      return {
        ...state,
        isLoading: true,
        hasErrored: true,
      }

    case ACTION_FETCH_ITEM:
      return {
        ...state,
        isLoading: true,
        hasErrored: false,
      }

    case ACTION_FETCH_ITEM_ERROR:
      return {
        ...state,
        hasErrored: true,
      }
    case ACTION_FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        pokemon: action.pokemon,
      }

    default:
      return state
  }
}
