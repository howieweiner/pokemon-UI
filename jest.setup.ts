import '@testing-library/jest-dom'
import fetchMock from 'jest-fetch-mock'

const testConfig = {
  publicRuntimeConfig: {
    apiHost: 'localhost',
    apiPort: 5000,
  },
}

jest.mock('next/config', () => (): any => testConfig)

fetchMock.enableMocks()
