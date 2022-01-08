import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'

interface IControlPanel {
  className?: string
}

const ControlPanel = ({ className }: IControlPanel) => {
  const { colorDict, currentColor, toggleCurrentColor } =
    useBackgroundStore()

  return (
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
  )
}

export default ControlPanel
