import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'

const EMAIL = 'kartafla.info@gmail.com'

const Contact = () => {
  const { currentColor } = useBackgroundStore()

  const clip = () => {
    navigator.clipboard.writeText(EMAIL)
  }

  return (
    <div className='w-1/2 z-10 absolute'>
      <button
        className={cn(
          'flex flex-col text-left hover:underline',
          {
            'text-white':
              currentColor.name === 'black' ||
              currentColor.name === 'red',
          }
        )}
        onClick={() => clip()}
      >
        <p>{EMAIL}</p>
      </button>
    </div>
  )
}

export default Contact
