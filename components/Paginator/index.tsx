import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useCardViewer } from '../../state/cardviewer-context'
import {
  getNextNumber,
  getPokemon,
  getPokemonIdForNumber,
  getPreviousNumber,
  hasNext,
  hasPokemon,
  hasPrevious,
  isInitialised,
} from '../../state/cardviewer-selectors'

export default function Paginator(): JSX.Element {
  const [pokemonNumber, setPokemonNumber] = useState<string>('')
  const { state, dispatch } = useCardViewer()
  const { fetchPokemon } = dispatch

  const appIsInitialised = isInitialised(state)
  const appHasPokemon = hasPokemon(state)
  const currentPokemon = getPokemon(state)

  const appHasPrevious = hasPrevious(state)
  const appHasNext = hasNext(state)

  useEffect(() => {
    if (isInitialised(state)) {
      if (hasPokemon(state)) {
        const po = getPokemon(state)
        if (po) {
          setPokemonNumber(po.number)
        }
      }
    }
  }, [appIsInitialised, appHasPokemon, currentPokemon, pokemonNumber])

  const onSelectPrevious = () => {
    if (appHasPrevious) {
      const pokemonNumber = getPreviousNumber(state)
      if (pokemonNumber) {
        const pokemonId = getPokemonIdForNumber(state, pokemonNumber)
        if (pokemonId) {
          fetchPokemon(pokemonId)
        }
      }
    }
  }

  const onSelectNext = () => {
    if (appHasNext) {
      const pokemonNumber = getNextNumber(state)
      if (pokemonNumber) {
        const pokemonId = getPokemonIdForNumber(state, pokemonNumber)
        if (pokemonId) {
          fetchPokemon(pokemonId)
        }
      }
    }
  }

  return (
    <div className="flex max-w-sm mx-auto mt-4">
      <Button label="Previous" disabled={!appHasPrevious} onSelect={onSelectPrevious} />
      <div className="inline-block flex items-center justify-center px-2 py-2 mx-1 text-sm text-center w-20 font-semibold">
        {pokemonNumber}
      </div>
      <Button label="Next" disabled={!appHasNext} onSelect={onSelectNext} />
    </div>
  )
}
