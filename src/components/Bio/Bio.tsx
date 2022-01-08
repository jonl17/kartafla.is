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
        kartafla is a web design studio based in Iceland. Driven
        to evolve our craft and honour the legacy of contemporary
        design, we provide services to a range of organizations,
        industries and sectors. We work with clients that share
        our value for design’s ability to tell a story, stir an
        emotional response and communicate with a clarity that is
        more than the sum of its parts. info@kartafla.com
      </p>
    </div>
  )
}

export default Bio
