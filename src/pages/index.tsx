import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'
import Bio from '@src/components/Bio'

export default function Home() {
  const { bg } = useBackgroundStore()

  return (
    <div className={cn('page h-screen w-full p-10', bg)}>
      <Bio />
    </div>
  )
}
