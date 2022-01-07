import { useBackgroundStore } from '@src/store/backgroundStore'
import React from 'react'
import cn from 'classnames'

const COLORS = ['bg-white', 'bg-green', 'bg-gray', 'bg-black']

interface IButton {
  color: string
}

const Button = ({ color }: IButton) => {
  const { toggleBg, bg } = useBackgroundStore()
  return (
    <button
      className={cn(
        color,
        'h-5 w-5 cursor-pointer hover:opacity-75',
        {
          border: color === bg,
        }
      )}
      onClick={() => toggleBg(color)}
    />
  )
}

interface IControlPanel {
  className?: string
}

const ControlPanel = ({ className }: IControlPanel) => {
  return (
    <div className={cn(className, 'grid gap-5 w-5 z-10')}>
      {COLORS.map((color, key) => (
        <Button key={key} color={color} />
      ))}
    </div>
  )
}

export default ControlPanel
