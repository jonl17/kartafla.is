import { useGame } from '@src/store/gameStore'
import React from 'react'
import cn from 'classnames'

const StartScreen = () => {
  const { toggleStart, started } = useGame()

  return (
    <button
      onClick={() => toggleStart()}
      className={cn(
        'h-screen w-full absolute top-0 left-0 bg-white z-50',
        {
          'animate-hide pointer-events-none': started,
        }
      )}
    >
      <h1 className='text-large lg:text-huge'>kartafla</h1>
    </button>
  )
}

export default StartScreen
