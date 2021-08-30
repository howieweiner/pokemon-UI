import React from 'react'
import { CustomProviderProps, renderWithProviders } from '../../test/test-utils'
import Paginator from './index'
import { CardViewerAction } from '../../state/cardviewer-actions'
import { buildInitialState, CardViewerState } from '../../state/store'
import { fireEvent } from '@testing-library/react'

jest.mock('../../lib/pokemon-service')

describe('<Paginator /> component', () => {
  let mockState: CardViewerState, mockDispatch: React.Dispatch<CardViewerAction>

  beforeEach(() => {
    mockState = buildInitialState()
    mockState.hasNext = true
    mockState.pokemonIds = [
      { id: 'abc', number: '001' },
      { id: 'xyz', number: '002' },
    ]
    mockState.pokemon = {
      fastAttacks: [],
      image: '',
      name: '',
      number: '001',
      resistant: [],
      specialAttacks: [],
      weaknesses: [],
    }

    mockDispatch = jest.fn()
  })

  it('should dispatch ACTION_FETCH_ITEM action when next button is selected', function () {
    const providerProps: CustomProviderProps = {
      dispatch: mockDispatch,
      state: mockState,
    }

    const { getByText } = renderWithProviders(<Paginator />, { providerProps })

    const previousButton = getByText('Next')
    fireEvent.click(previousButton)

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'ACTION_FETCH_ITEM' })
  })

  it('should not dispatch ACTION_FETCH_ITEM action when disabled prev button is selected', function () {
    const providerProps: CustomProviderProps = {
      dispatch: mockDispatch,
      state: mockState,
    }
    const { getByText } = renderWithProviders(<Paginator />, { providerProps })

    const previousButton = getByText('Previous')
    fireEvent.click(previousButton)

    expect(mockDispatch).not.toHaveBeenCalled()
  })
})
