import React from 'react'
import Characteristic from './Characteristic'
import Loader from '../Loader'

export default function PokemonCard(): JSX.Element {
  return (
    <>
      <div className="max-w-sm mx-auto min-h-44 pb-8 overflow-hidden bg-gray-300 text-gray-700 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="bg-white">
          <img className="p-4 h-40 mx-auto" src="https://img.pokemondb.net/artwork/bulbasaur.jpg" alt="cartoon" />
        </div>
        <div className="py-2 bg-gray-800 flex justify-center">
          <h2 className="font-light text-lg text-white inline-block uppercase">Bulbasaur</h2>
        </div>

        <section>
          <Characteristic heading="Resistance" items={['Water', 'Electric', 'Grass', 'Fighting', 'Fairy']} />
          <Characteristic heading="Weaknesses" items={['Water', 'Electric', 'Grass', 'Fighting', 'Fairy']} />
          <Characteristic heading="Fast Attacks" items={['Water', 'Electric', 'Grass', 'Fighting', 'Fairy']} />
          <Characteristic heading="Special Attacks" items={['Water', 'Electric', 'Grass', 'Fighting', 'Fairy']} />
        </section>
      </div>
    </>
  )
}
