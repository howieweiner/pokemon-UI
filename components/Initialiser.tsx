import { useCardViewer } from '../state/cardviewer-context'
import { useEffect } from 'react'
import { isInitialised } from '../state/cardviewer-selectors'

export default function Initialiser(): null {
  const { state, dispatch } = useCardViewer()
  const { initialise } = dispatch

  useEffect(() => {
    if (!isInitialised(state)) {
      initialise()
    }
  }, [])

  return null
}
