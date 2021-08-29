import React from 'react'
import Footer from './Footer'

    type LayoutProps = {
      children: React.ReactNode
    }

export default function Layout ({children}: LayoutProps): JSX.Element {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
