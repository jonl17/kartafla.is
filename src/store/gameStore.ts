import create from 'zustand'

interface IGame {
  started: boolean
  toggleStart: () => void
}

export const useGame = create<IGame>(set => ({
  started: false,
  toggleStart: () => set(() => ({ started: true })),
}))
