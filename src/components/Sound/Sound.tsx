import { useBackgroundStore } from '@src/store/backgroundStore'
import { ISound } from '@src/types'
import React, { useRef, useEffect } from 'react'

type Props = {
  sound: ISound
  play: boolean
}

const Sound = ({ play, sound }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [play])

  return <audio ref={audioRef} src={sound.publicURL}></audio>
}

export default Sound
