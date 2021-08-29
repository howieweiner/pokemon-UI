import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Paginator from './Paginator'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <Header />
      <main className="mb-auto">{children}</main>
      <Paginator />
      <Footer />
    </div>
  )
}
