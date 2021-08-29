import React from 'react'
import Button from './Button'
import { fireEvent, render } from '@testing-library/react'

describe('<Button />', () => {
  it('displays the label text', async () => {
    const { findByText } = render(<Button label="Press Me!" disabled={true} onSelect={jest.fn()} />)
    await findByText('Press Me!')
  })

  it('fires the select event when the button is clicked', () => {
    const mockEvent = jest.fn()
    const { getByTestId } = render(<Button label="Press Me!" disabled={true} onSelect={mockEvent} />)
    fireEvent.click(getByTestId('paginator-button'))
    expect(mockEvent).toHaveBeenCalled()
  })

  it('fires the select event when the button is selected using keyboard', () => {
    const mockEvent = jest.fn()
    const { getByTestId } = render(<Button label="Press Me!" disabled={true} onSelect={mockEvent} />)
    fireEvent.keyPress(getByTestId('paginator-button'), { key: 'Enter', keyCode: 13 })
    expect(mockEvent).toHaveBeenCalled()
  })

  it('renders the button as disabled', () => {
    const { container } = render(<Button label="Press Me!" disabled={true} onSelect={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })

  it('renders the button as enabled', () => {
    const { container } = render(<Button label="Press Me!" disabled={false} onSelect={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })
})
