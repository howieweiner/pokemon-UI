import React from 'react'

type Props = {
  heading: string
  items: string[] | undefined
}

const Characteristic: React.FC<Props> = ({ heading, items }) => {
  if (!items) {
    return null
  }

  const itemList = items.join(', ')

  return (
    <div className="px-8 pt-4">
      <h3 className="text-sm font-semibold">{heading}</h3>
      <p className="text-xs">{itemList}</p>
    </div>
  )
}

export default Characteristic
