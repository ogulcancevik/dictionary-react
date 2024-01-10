import { useState } from 'react'
import Search from './components/Search'
import { dictionaryService } from './services/dictionary.service'
import { IDictionary } from './types/dictionary.types'
import Header from './components/Header'
import { DictionaryContext } from './ContextProvider'
import PhoneticSection from './components/PhoneticSection'
import WordSection from './components/WordSection'
import SourceSection from './components/SourceSection'

const App = () => {
  const [dictionary, setDictionary] = useState<IDictionary[]>([])
  const searchWord = async (word: string) => {
    const data = await dictionaryService.fetchDictionary(word)
    setDictionary(data)
  }
  const getData = (partOfSpeech: string) => {
    return dictionary
      .map((item) => item.meanings.find((item) => item.partOfSpeech === partOfSpeech))
      .filter((item) => item && item)
  }
  return (
    <div className="container mx-auto lg:pt-6 pt-16 px-[28%] xl:px-[20%] lg:px-12 md:!px-6 sm:!px-3 flex flex-col gap-6">
      <Header />
      <Search searchWord={searchWord} />
      {dictionary.length > 0 ? <DictionaryContext.Provider value={dictionary}>
        <PhoneticSection />
        <WordSection data={getData('noun')} />
        <WordSection data={getData('verb')} />
        <SourceSection />
      </DictionaryContext.Provider> : <div className="flex justify-center items-center mt-6 animate-bounce">
        <span className="text-3xl font-medium dark:text-white">Search a word to get started</span>
      </div>}
    </div>
  )
}

export default App
