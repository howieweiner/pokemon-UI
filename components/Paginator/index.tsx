import React from 'react'
import Button from './Button'

export default function Paginator(): JSX.Element {
  return (
    <div className="flex max-w-sm mx-auto mt-4">
      <Button label="Previous" disabled={true} onSelect={() => {}} />
      <div className="inline-block flex items-center justify-center px-2 py-2 mx-1 text-sm text-center w-20 font-semibold">
        001
      </div>
      <Button label="Next" disabled={false} onSelect={() => {}} />
    </div>
  )
}
