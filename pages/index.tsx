import React from 'react'
import Head from 'next/head'
import PokemonCard from '../components/PokemonCard'
import Layout from '../components/Layout'
import Container from '../components/Container'
import ErrorMessage from '../components/ErrorMessage'
import Initialiser from '../components/Initialiser'

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Pokemon UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Initialiser />
        <ErrorMessage />
        <PokemonCard pokemonNumber="001" />
      </Container>
    </Layout>
  )
}
