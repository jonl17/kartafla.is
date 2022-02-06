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
        'absolute bottom-52 left-0 overflow-x-hidden projects overflow-hidden w-full p-5 lg:p-10 z-10'
      )}
    >
      <div className='relative'>
        <div className='whitespace-nowrap flex animate-marquee'>
          {PROJECTS.map((project, key) => (
            <a href={project.url} target='_blank' key={key}>
              <p
                className={cn(
                  'lowercase hover:underline mx-12 lg:mx-24',
                  {
                    'text-white': currentColor.name === 'black',
                  }
                )}
              >
                {project.label}
              </p>
            </a>
          ))}
        </div>
        <div className='whitespace-nowrap flex animate-marquee2 absolute bottom-0'>
          {PROJECTS.map((project, key) => (
            <a href={project.url} target='_blank' key={key}>
              <p
                className={cn(
                  'lowercase hover:underline mx-24',
                  {
                    'text-white': currentColor.name === 'black',
                  }
                )}
              >
                {project.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
