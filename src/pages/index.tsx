import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'
import Bio from '@src/components/Bio'
import Potato3D from '@src/components/Potato3D'
import ControlPanel from '@src/components/ControlPanel'
import Projects from '@src/components/Projects'

export default function Home() {
  const { currentColor } = useBackgroundStore()

  return (
    <div
      className={cn(
        'page h-screen w-full p-5 lg:p-10 transition-colors',
        currentColor.className
      )}
    >
      <Bio />
      <div className='absolute h-screen w-screen top-0 left-0 grid place-items-center'>
        <Potato3D />
      </div>
      <ControlPanel className='w-32 absolute top-5 right-5 lg:right-10 lg:top-10' />
      <Projects />
    </div>
  )
}
