import '@testing-library/jest-dom'
import { fetch } from 'whatwg-fetch'

global.fetch = fetch

const testConfig = {
  publicRuntimeConfig: {
    apiHost: 'localhost',
    apiPort: 5000,
  },
}

jest.mock('next/config', () => (): any => testConfig)
