import create from 'zustand'

interface IBackground {
  bg: string
  toggleBg: (bg: string) => void
}

// const useBackgroundStore = create<IBackground>(set => ({
//   bg: 'bg-white',
//   toggleBg: (chosenBg: string) =>
//     set(() => ({
//       bg: chosenBg,
//     })),
// }))

const useBackgroundStore = create<IBackground>(set => ({
  bg: 'bg-white',
  toggleBg: (chosenBg: string) =>
    set(() => ({
      bg: chosenBg,
    })),
}))

export { useBackgroundStore }
