export default function IndexPage(): null {
  return null
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/001',
      permanent: false,
    },
  }
}
