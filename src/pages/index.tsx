import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'
import Bio from '@src/components/Bio'
import Potato3D from '@src/components/Potato3D'

export default function Home() {
  const { currentColor } = useBackgroundStore()

  return (
    <div
      className={cn(
        'page h-screen w-full p-10',
        currentColor.className
      )}
    >
      <Bio />
      <div className='absolute h-screen w-screen top-0 left-0 grid place-items-center'>
        <Potato3D />
      </div>
    </div>
  )
}
