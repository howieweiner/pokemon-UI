import React from 'react'

export default function Loader(): JSX.Element {
  return (
    <div className="flex justify-center items-center space-x-2 mt-24" id="ziggy">
      <div className="bg-gray-400 p-2 w-4 h-4 rounded-full animate-bounce bounce-1" />
      <div className="bg-gray-600 p-2 w-4 h-4 rounded-full animate-bounce bounce-2" />
      <div className="bg-gray-800 p-2 w-4 h-4 rounded-full animate-bounce bounce-3" />
    </div>
  )
}
