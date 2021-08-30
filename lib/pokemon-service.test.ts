import fetch from 'jest-fetch-mock'
import { getPokemonById } from './pokemon-service'
import { PokemonApiResponse } from '../types/pokemon'

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    apiHost: 'test.api',
    apiPort: 1234,
  },
}))

describe('pokemon service', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  describe('getPokemonById()', () => {
    it('should call the configured endpoint with the correct payload', async () => {
      const mockResponse: PokemonApiResponse = {
        attacks: { fast: [], special: [] },
        image: '',
        name: 'poky',
        number: '',
        resistant: [],
        weaknesses: [],
      }
      fetch.mockResponseOnce(JSON.stringify({ data: { pokemon: mockResponse } }))

      // when
      const pokemon = await getPokemonById('abc123')

      // then
      expect(pokemon?.name).toEqual('poky')
    })
  })
})
