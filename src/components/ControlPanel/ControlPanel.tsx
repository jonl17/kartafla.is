import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'
import Sound from '@cmp/Sound'
import { graphql, useStaticQuery } from 'gatsby'
import { ISound } from '@src/types'
import { useGame } from '@src/store/gameStore'

interface IControlPanel {
  className?: string
}

const useGetSounds = (): ISound[] => {
  const result = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/sounds/" } }) {
        nodes {
          publicURL
          name
        }
      }
    }
  `)
  return result.allFile.nodes
}

const ControlPanel = ({ className }: IControlPanel) => {
  const { colorDict, currentColor, toggleCurrentColor } =
    useBackgroundStore()

  const sounds = useGetSounds()

  const { started } = useGame()

  const shouldPlay = (colorName: string, soundName: string) => {
    if (colorName === 'black' && soundName === 'dark')
      return true
    else if (colorName === 'white' && soundName === 'thin')
      return true
    else if (colorName === 'green' && soundName === 'melodic')
      return true
    else if (colorName === 'red' && soundName === 'tight')
      return true
    else if (colorName === 'gray' && soundName === 'dry')
      return true
    else return false
  }

  return (
    <>
      <div className={cn(className, 'grid gap-5 w-5 z-10')}>
        {colorDict.map((color, key) => (
          <button
            key={key}
            className={cn(
              color.className,
              'h-5 w-5 cursor-pointer hover:opacity-75',
              {
                border: currentColor.name === color.name,
              }
            )}
            onClick={() => toggleCurrentColor(color.name)}
          />
        ))}
      </div>
      {sounds.map((sound, key) => (
        <Sound
          play={
            started && shouldPlay(currentColor.name, sound.name)
          }
          sound={sound}
          key={key}
        />
      ))}
    </>
  )
}

export default ControlPanel
