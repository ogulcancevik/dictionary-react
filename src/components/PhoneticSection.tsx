import { useContext } from 'react'
import PlayButton from './PlayButton'
import { DictionaryContext } from '../ContextProvider'
import { IPhonetic } from '../types/dictionary.types'
const PhoneticSection = () => {
  const dictionary = useContext(DictionaryContext)
  const getPhonetic = (phonetics: IPhonetic[]) => {
    const phoneticsText = phonetics.map((item) => item.text)
    return phoneticsText.find((item) => item && item)
  }
  const oneResult = dictionary[0]
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-medium dark:text-white">{oneResult.word}</span>
          <span className="text-[#9955c5] text-xl">
            {getPhonetic(oneResult.phonetics)}
          </span>
        </div>
        <PlayButton phonetics={oneResult.phonetics} />
      </div>
    </div>
  )
}

export default PhoneticSection
