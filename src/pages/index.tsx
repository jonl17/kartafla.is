import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'
import Bio from '@src/components/Bio'
import Potatoe from '@src/components/Potatoe'

export default function Home() {
  const { bg } = useBackgroundStore()

  return (
    <div className={cn('page h-screen w-full p-10', bg)}>
      <Bio />
      <div className='absolute h-screen w-screen top-0 left-0 grid place-items-center pointer-events-none'>
        <Potatoe />
      </div>
    </div>
  )
}
