import React from 'react'
import Head from 'next/head'
import Hello from '../components/Hello'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Pokemon UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hello />
      </Container>
    </Layout>
  )
}
