import { buildInitialState, CardViewerState } from './store'
import {
  ACTION_FETCH_ITEM_ERROR,
  ACTION_FETCH_ITEM_SUCCESS,
  ACTION_FETCH_ITEM,
  CardViewerAction,
} from './cardviewer-actions'
import { cardviewerReducer } from './cardviewer-reducer'

describe('cardviewer reducer', function () {
  let previousState: CardViewerState

  beforeEach(() => {
    previousState = buildInitialState()
  })

  it('should return correct state when action is ACTION_FETCH_ITEM', () => {
    const action: CardViewerAction = {
      type: ACTION_FETCH_ITEM,
    }

    expect(cardviewerReducer(previousState, action)).toEqual({
      isInitialised: false,
      isLoading: true,
      hasErrored: false,
      hasPrevious: false,
      hasNext: false,
    })
  })

  it('should return correct state when action is ACTION_FETCH_ITEM_SUCCESS', () => {
    const action: CardViewerAction = {
      type: ACTION_FETCH_ITEM_SUCCESS,
    }

    expect(cardviewerReducer(previousState, action)).toEqual({
      isInitialised: false,
      isLoading: false,
      hasErrored: false,
      hasPrevious: false,
      hasNext: false,
    })
  })

  it('should return correct state when action is ACTION_FETCH_ITEM_ERROR', () => {
    const action: CardViewerAction = {
      type: ACTION_FETCH_ITEM_ERROR,
    }

    expect(cardviewerReducer(previousState, action)).toEqual({
      isInitialised: false,
      isLoading: false,
      hasErrored: true,
      hasPrevious: false,
      hasNext: false,
    })
  })
})
