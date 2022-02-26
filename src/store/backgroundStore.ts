import create from 'zustand'

export type AvailableBackgroundColors =
  | 'white'
  | 'gray'
  | 'green'
  | 'black'
  | 'red'

export interface IColor {
  name: AvailableBackgroundColors
  className: string
  value: string
}
interface IBackground {
  currentColor: IColor
  toggleCurrentColor: (
    colorName: AvailableBackgroundColors
  ) => void
  colorDict: IColor[]
}

const AVAILABLE_COLORS: IColor[] = [
  { name: 'green', className: 'bg-green', value: '#27AE60' },
  { name: 'white', className: 'bg-white', value: '#F2F2F2' },
  { name: 'gray', className: 'bg-gray', value: '#C4C4C4' },
  { name: 'black', className: 'bg-black', value: '#333333' },
  { name: 'red', className: 'bg-red', value: '#EB5757' },
]

const INITIAL_VALUE = AVAILABLE_COLORS[4]

const useBackgroundStore = create<IBackground>(set => ({
  currentColor: INITIAL_VALUE,
  toggleCurrentColor: (colorName: AvailableBackgroundColors) =>
    set(() => ({
      currentColor:
        AVAILABLE_COLORS.find(
          color => color.name === colorName
        ) ?? INITIAL_VALUE,
    })),
  colorDict: AVAILABLE_COLORS,
}))

export { useBackgroundStore }
