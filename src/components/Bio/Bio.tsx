import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'

const Bio = () => {
  const { currentColor } = useBackgroundStore()
  return (
    <div className='w-1/2'>
      <p
        className={cn({
          'text-white': currentColor.name === 'black',
        })}
      >
        kartafla.info@gmail.com
      </p>
    </div>
  )
}

export default Bio
