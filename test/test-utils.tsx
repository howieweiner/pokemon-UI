import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { CardViewerDispatchContext, CardViewerStateContext } from '../state/cardviewer-context'
import React from 'react'
import { CardViewerState } from '../state/store'
import { CardViewerAction } from '../state/cardviewer-actions'

export type CustomProviderProps = { state: CardViewerState; dispatch: React.Dispatch<CardViewerAction> }

type CustomRenderOptions = {
  providerProps: CustomProviderProps
  renderOptions?: RenderOptions
}

const renderWithProviders = (ui: React.ReactElement, options: CustomRenderOptions): RenderResult => {
  const providerProps = { ...options.providerProps }
  const renderOptions = { ...options.renderOptions }

  return render(
    <CardViewerStateContext.Provider value={providerProps.state}>
      <CardViewerDispatchContext.Provider value={providerProps.dispatch}>{ui}</CardViewerDispatchContext.Provider>
    </CardViewerStateContext.Provider>,
    renderOptions
  )
}

export { renderWithProviders }
