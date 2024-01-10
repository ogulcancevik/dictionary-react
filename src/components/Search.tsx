import { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

interface ISearchProps {
  searchWord: (word: string) => void;
}
const Search = (props: ISearchProps) => {
  const { searchWord } = props
  const [word, setWord] = useState('')

  const enterEventHandler = (e: KeyboardEvent) => {
    word && e.key === 'Enter' && searchWord(word)
  }
  useEffect(() => {
    window.addEventListener('keydown', enterEventHandler)
    return () => window.removeEventListener('keydown', enterEventHandler)
  })

  return (
    <div className="relative bg-[#f4f4f4] dark:bg-[#202020] dark:text-white w-full h-12 rounded-2xl flex items-center">
      <input
        type="text"
        className="bg-[#f4f4f4] dark:bg-[#202020] w-full h-12 rounded-2xl ring-0 outline-none pl-4 pr-12"
        onChange={(e) => setWord(e.target.value)}
      />
      <IoSearchOutline
        className="text-[#a745ef] absolute right-0 mr-5 cursor-pointer"
        size={24}
        onClick={() => searchWord(word)}
      />
    </div>
  )
}

export default Search
