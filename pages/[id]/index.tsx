import React from 'react'
import Head from 'next/head'
import PokemonCard from '../../components/PokemonCard'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import ErrorMessage from '../../components/ErrorMessage'
import Initialiser from '../../components/Initialiser'
import Paginator from '../../components/Paginator'
import { GetServerSideProps } from 'next'

interface Props {
  id: string
}

const PokemonPage: React.FC<Props> = ({ id }) => {
  return (
    <Layout>
      <Head>
        <title>Pokemon UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Initialiser />
        <ErrorMessage />
        <PokemonCard pokemonNumber={id} />
      </Container>
      <Paginator />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string
  if (!id) {
    return { notFound: true }
  }

  return {
    props: { id },
  }
}

export default PokemonPage
