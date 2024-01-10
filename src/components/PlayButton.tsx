import { IoPlay } from 'react-icons/io5'
import { IPhonetic } from '../types/dictionary.types'

const PlayButton = ({ phonetics }: { phonetics: IPhonetic[] }) => {
  const getAudio = (phonetics: IPhonetic[]) => {
    return phonetics.find((item) => item.audio !== '')
  }
  const audio = getAudio(phonetics)
  const playAudio =  () => {
    if (!audio) {
      alert('No audio found')
    }
    const audioElement = new Audio(audio?.audio)
    audioElement.play()
  }
  return (
    <div className="bg-[#a245ed] bg-opacity-30 rounded-full w-14 h-14 flex justify-center items-center cursor-pointer" onClick={playAudio}>
      <IoPlay size={24} color="#a245ed" />
    </div>
  )
}

export default PlayButton
