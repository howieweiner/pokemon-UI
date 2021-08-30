import getConfig from 'next/config'
import { Attack, Pokemon, PokemonApiResponse, PokemonId } from '../types/pokemon'

const POKEMON_IDS_QUERY = 'query { pokemons(first: 151) { id, number} }'

const POKEMON_QUERY = `query FetchPokemon($id: String!) {
  query {
    pokemon(id: $id) {
      number,
      name,
      image,
      resistant,
      weaknesses,
      attacks {
        fast { name, type, damage },
        special { name, type, damage }
      }
    }
  }
}`

const { publicRuntimeConfig } = getConfig()
const { apiHost, apiPort } = publicRuntimeConfig

const apiEndpoint = `//${apiHost}:${apiPort}`

async function getPokemonIds(): Promise<PokemonId[] | undefined> {
  const response: Response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({ query: POKEMON_IDS_QUERY }),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const jsonData = await response.json()
  return jsonData.data.pokemons as PokemonId[]
}

async function getPokemonById(id: string): Promise<Pokemon | undefined> {
  const response: Response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
      query: POKEMON_QUERY,
      variables: { id },
    }),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const jsonData = await response.json()

  const apiResponse = jsonData.data.query.pokemon as PokemonApiResponse

  return {
    fastAttacks: formatAttacks(apiResponse.attacks.fast),
    image: apiResponse.image,
    name: apiResponse.name,
    number: apiResponse.number,
    resistant: apiResponse.resistant,
    specialAttacks: formatAttacks(apiResponse.attacks.special),
    weaknesses: apiResponse.weaknesses,
  }
}

const formatAttack = (attack: Attack): string => `${attack.name} (${attack.type}) - ${attack.damage}`

const formatAttacks = (attacks: Attack[]): string[] => attacks.map((attack) => formatAttack(attack))

export { getPokemonIds, getPokemonById }
