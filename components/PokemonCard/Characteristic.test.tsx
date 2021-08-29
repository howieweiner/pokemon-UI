import React from 'react'
import { render } from '@testing-library/react'
import Characteristic from './Characteristic'

describe('<Characteristic />', () => {
  it('displays the heading', async () => {
    const { findByText } = render(<Characteristic heading="Resistance" items={[]} />)
    await findByText('Resistance')
  })

  it('displays the items', async () => {
    const items = ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy']
    const { findByText } = render(<Characteristic heading="Resistance" items={items} />)
    await findByText('Water, Electric, Grass, Fighting, Fairy')
  })
})
