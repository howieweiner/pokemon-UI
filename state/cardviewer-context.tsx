import React from 'react'
import {
  ACTION_FETCH_ITEM,
  ACTION_FETCH_ITEM_ERROR,
  ACTION_FETCH_ITEM_SUCCESS,
  ACTION_INITIALISE,
  ACTION_INITIALISE_ERROR,
  ACTION_INITIALISE_SUCCESS,
  CardViewerAction,
} from './cardviewer-actions'
import { buildInitialState, CardViewerState } from './store'
import { cardviewerReducer } from './cardviewer-reducer'
import { getPokemonById, getPokemonIds } from '../lib/pokemon-service'

// eslint-disable-next-line no-unused-vars
type CardViewerDispatch = (action: CardViewerAction) => void

type CardViewerProviderProps = {
  children: React.ReactNode
}

type CardViewerDispatchProps = {
  initialise: () => void
  // eslint-disable-next-line no-unused-vars
  fetchPokemon: (pokemonId: string) => void
}

const CardViewerStateContext = React.createContext<CardViewerState | undefined>(undefined)
const CardViewerDispatchContext = React.createContext<CardViewerDispatch | undefined>(undefined)

function CardViewerProvider({ children }: CardViewerProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(cardviewerReducer, buildInitialState())
  return (
    <CardViewerStateContext.Provider value={state}>
      <CardViewerDispatchContext.Provider value={dispatch}>{children}</CardViewerDispatchContext.Provider>
    </CardViewerStateContext.Provider>
  )
}

/**
 * Custom hook for state context
 */
function useCardViewerState(): CardViewerState {
  const state = React.useContext(CardViewerStateContext)
  if (!state) {
    throw new Error('useCardViewerState must be used within a CardViewerProvider')
  }
  return state
}

/**
 * Custom hook for dispatch context
 */
function useCardViewerDispatch(): CardViewerDispatchProps {
  const dispatch = React.useContext(CardViewerDispatchContext)
  if (!dispatch) {
    throw new Error('useCardViewerDispatch must be used within a CardViewerProvider')
  }

  const initialise = async (): Promise<void> => {
    dispatch({ type: ACTION_INITIALISE })
    try {
      const pokemonIds = await getPokemonIds()
      dispatch({ type: ACTION_INITIALISE_SUCCESS, pokemonIds })
    } catch (e) {
      console.error(e)
      dispatch({ type: ACTION_INITIALISE_ERROR })
    }
  }

  const fetchPokemon = async (pokemonId: string): Promise<void> => {
    dispatch({ type: ACTION_FETCH_ITEM })
    try {
      const pokemon = await getPokemonById(pokemonId)
      dispatch({ type: ACTION_FETCH_ITEM_SUCCESS, pokemon })
    } catch (e) {
      console.error(e)
      dispatch({ type: ACTION_FETCH_ITEM_ERROR })
    }
  }

  return {
    initialise,
    fetchPokemon,
  }
}

/**
 * Custom hook wrapping both state and dispatch
 */
function useCardViewer(): { state: CardViewerState; dispatch: CardViewerDispatchProps } {
  return { state: useCardViewerState(), dispatch: useCardViewerDispatch() }
}

export { CardViewerProvider, CardViewerDispatchContext, CardViewerStateContext, useCardViewer }
