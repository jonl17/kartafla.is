import { useBackgroundStore } from '@src/store/backgroundStore'
import React, { useState } from 'react'
import cn from 'classnames'

const EMAIL = 'kartafla.info@gmail.com'

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const { currentColor } = useBackgroundStore()

  const clip = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
  }

  return (
    <div className='w-1/2 z-10 absolute'>
      <button
        className='flex flex-col text-left hover:underline'
        onClick={() => clip()}
      >
        <p
          className={cn({
            'text-white':
              currentColor.name === 'black' ||
              currentColor.name === 'red',
          })}
        >
          {EMAIL}
        </p>
      </button>
    </div>
  )
}

export default Contact
