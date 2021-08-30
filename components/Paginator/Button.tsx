import React from 'react'
import classNames from 'classnames'

type Props = {
  label: string
  disabled: boolean
  onSelect: () => void
}

const Button: React.FC<Props> = ({ label, disabled, onSelect }) => {
  const styles = classNames(
    'flex items-center justify-center px-2 py-2 mx-1 text-sm text-center w-20 rounded-md bg-white',
    {
      'text-gray-700 transition-colors duration-200 transform dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-500 hover:text-white dark:hover:text-gray-200':
        !disabled,
      'text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600': disabled,
    }
  )

  const onSelected = (): void => {
    onSelect()
  }

  return (
    <button className={styles} onClick={onSelected} onKeyPress={onSelected} data-testid="paginator-button">
      {label}
    </button>
  )
}

export default Button
