import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({children}: ContainerProps): JSX.Element {
  return (
    <div className="container mx-auto px-5">{children}</div>
  )
}
