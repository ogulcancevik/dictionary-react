import { IoPlay, IoPause } from 'react-icons/io5'
import { IPhonetic } from '../types/dictionary.types'
import { useState } from 'react'
const PlayButton = ({ phonetics }: { phonetics: IPhonetic[] }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const getAudio = (phonetics: IPhonetic[]) => {
    return phonetics.find((item) => item.audio !== '')
  }
  const audio = getAudio(phonetics)
  const playAudio =  async () => {
    if (!audio || isPlaying) return
    const audioElement = new Audio(audio.audio)
    setIsPlaying(true)
    await audioElement.play()
    audioElement.onended = () => setIsPlaying(false)
  }
  return (
    <div className="bg-[#a245ed] bg-opacity-30 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer" onClick={playAudio}>
      {isPlaying ? <IoPause size={24} color="#a245ed" /> : <IoPlay size={24} color="#a245ed" />}
    </div>
  )
}

export default PlayButton
