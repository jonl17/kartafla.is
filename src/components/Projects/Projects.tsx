import React from 'react'
import cn from 'classnames'
import { useBackgroundStore } from '@src/store/backgroundStore'

const PROJECTS = [
  { label: 'Þykjó', url: 'https://www.thykjo.com/' },
  { label: 'Nýlistasafnið', url: 'https://www.nylo.is/' },
  {
    label: 'Hjörtur Jóhannsson',
    url: 'https://hjorturjohannsson.com/',
  },
  { label: 'Skjaldborg', url: 'https://skjaldborg.is/' },
  { label: 'TVIST', url: 'https://tvist.is/' },
]

type Props = {
  className?: string
}

const Projects = ({ className }: Props) => {
  const { currentColor } = useBackgroundStore()
  return (
    <section
      className={cn(
        className,
        'projects overflow-hidden w-full absolute bottom-0 p-5 lg:p-10 z-10'
      )}
    >
      <div className='flex flex-col lg:flex-row  justify-between w-full'>
        <p
          className={cn('mb-2 lg:mb-0', {
            'text-white': currentColor.name === 'black',
          })}
        >
          nýtt:
        </p>
        {PROJECTS.map((project, key) => (
          <a href={project.url} target='_blank' key={key}>
            <p
              className={cn('lowercase hover:underline', {
                'text-white': currentColor.name === 'black',
              })}
            >
              {project.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
