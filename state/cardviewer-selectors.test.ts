import { getPokemon, hasErrored, hasNext, hasPrevious, isLoading } from './cardviewer-selectors'
import { CardViewerState } from './store'

describe('checklist state selectors', () => {
  let state: CardViewerState

  beforeEach(() => {
    state = {
      isLoading: false,
      hasErrored: false,
      hasPrevious: false,
      hasNext: false,
      pokemon: {
        fastAttacks: ['a', 'b'],
        image: 'http://an.image',
        name: 'name',
        number: '001',
        resistant: ['c', 'd'],
        specialAttacks: ['e', 'f'],
        weaknesses: ['g', 'h'],
      },
    }
  })

  describe('isLoading', () => {
    it('should return false if not loading', function () {
      expect(isLoading(state)).toBeFalsy()
    })

    it('should return true if loading', function () {
      state.isLoading = true
      expect(isLoading(state)).toBeTruthy()
    })
  })

  describe('hasErrored', () => {
    it('should return false if no errors', function () {
      expect(hasErrored(state)).toBeFalsy()
    })

    it('should return true if errors', function () {
      state.hasErrored = true
      expect(hasErrored(state)).toBeTruthy()
    })
  })

  describe('getPokemon', () => {
    it('should return a pokemon if set', function () {
      expect(getPokemon(state)).toEqual({
        fastAttacks: ['a', 'b'],
        image: 'http://an.image',
        name: 'name',
        number: '001',
        resistant: ['c', 'd'],
        specialAttacks: ['e', 'f'],
        weaknesses: ['g', 'h'],
      })
    })

    it('should return undefined if no pokemon set', function () {
      state.pokemon = undefined
      expect(getPokemon(state)).toBeUndefined()
    })
  })

  describe('hasPrevious', () => {
    it('should return false if state does not have a pokemon', function () {
      state.pokemon = undefined
      expect(hasPrevious(state)).toBeFalsy()
    })

    it('should return false if state pokemon has min id', function () {
      expect(hasPrevious(state)).toBeFalsy()
    })
    it('should return true if state does have previous', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.pokemon.number = '002'
      expect(hasPrevious(state)).toBeTruthy()
    })
  })

  describe('hasNext', () => {
    it('should return false if state does not have a pokemon', function () {
      state.pokemon = undefined
      expect(hasNext(state)).toBeFalsy()
    })

    it('should return false if state pokemon has max id', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.pokemon.number = '151'
      expect(hasNext(state)).toBeFalsy()
    })
    it('should return true if state does have next', function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.pokemon.number = '050'
      expect(hasPrevious(state)).toBeTruthy()
    })
  })
})
