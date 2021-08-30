import React, { useEffect, useState } from 'react'
import Characteristic from './Characteristic'
import { useCardViewer } from '../../state/cardviewer-context'
import {
  getPokemon,
  getPokemonIdForNumber,
  hasErrored,
  hasPokemon,
  isInitialised,
  isLoading,
} from '../../state/cardviewer-selectors'
import { Pokemon } from '../../types/pokemon'

type Props = {
  pokemonNumber: string
}

// TODO: unit tests
const PokemonCard: React.FC<Props> = ({ pokemonNumber }) => {
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<Pokemon | undefined>()
  const { state, dispatch } = useCardViewer()

  useEffect(() => {
    console.log('Ziggy')
    if (!isInitialised(state) || isLoading(state) || hasErrored(state)) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }

    // if we have initialised data but do not yet have a pokemon, fetch the
    // first one
    if (isInitialised(state)) {
      if (!hasPokemon(state)) {
        const pokemonId = getPokemonIdForNumber(state, pokemonNumber)
        if (pokemonId) {
          const { fetchPokemon } = dispatch
          fetchPokemon(pokemonId)
        }
      }

      if (hasPokemon(state)) {
        const po = getPokemon(state)
        if (po) {
          setPokemon(po)
        }
      }
    }
  }, [isInitialised(state), hasPokemon(state), getPokemon(state), hasErrored(state), pokemonNumber])

  if (isHidden) {
    return null
  }

  return (
    <>
      <div className="max-w-sm mx-auto min-h-44 pb-8 overflow-hidden bg-gray-300 text-gray-700 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="bg-white">
          <img className="p-4 h-40 mx-auto" src={pokemon?.image} alt="avatar" />
        </div>
        <div className="py-2 bg-gray-800 flex justify-center">
          <h2 className="font-light text-lg text-white inline-block uppercase">{pokemon?.name}</h2>
        </div>

        <section>
          <Characteristic heading="Resistance" items={pokemon?.resistant} />
          <Characteristic heading="Weaknesses" items={pokemon?.weaknesses} />
          <Characteristic heading="Fast Attacks" items={pokemon?.fastAttacks} />
          <Characteristic heading="Special Attacks" items={pokemon?.specialAttacks} />
        </section>
      </div>
    </>
  )
}

export default PokemonCard
