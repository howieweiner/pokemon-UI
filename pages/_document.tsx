import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
