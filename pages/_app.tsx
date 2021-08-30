import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/index.css'
import { CardViewerProvider } from '../state/cardviewer-context'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CardViewerProvider>
      <Component {...pageProps} />
    </CardViewerProvider>
  )
}
