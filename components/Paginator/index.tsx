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

// TODO: unit tests
export default function Paginator(): JSX.Element {
  const [pokemonNumber, setPokemonNumber] = useState<string>('')
  const { state, dispatch } = useCardViewer()
  const { fetchPokemon } = dispatch

  useEffect(() => {
    if (isInitialised(state)) {
      if (hasPokemon(state)) {
        const po = getPokemon(state)
        if (po) {
          setPokemonNumber(po.number)
        }
      }
    }
  }, [isInitialised(state), hasPokemon(state), getPokemon(state), pokemonNumber])

  const onSelectPrevious = () => {
    if (hasPrevious(state)) {
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
    if (hasNext(state)) {
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
      <Button label="Previous" disabled={!hasPrevious(state)} onSelect={onSelectPrevious} />
      <div className="inline-block flex items-center justify-center px-2 py-2 mx-1 text-sm text-center w-20 font-semibold">
        {pokemonNumber}
      </div>
      <Button label="Next" disabled={!hasNext(state)} onSelect={onSelectNext} />
    </div>
  )
}
