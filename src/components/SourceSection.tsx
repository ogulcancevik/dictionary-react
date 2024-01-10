import { useContext } from 'react'
import { DictionaryContext } from '../ContextProvider'

const SourceSection = () => {
  const dictionary = useContext(DictionaryContext)
  const sourceUrls = dictionary.map((item) => item.sourceUrls)
  return (
    <div className="flex flex-col gap-3 pb-5">
      <div className="flex items-center gap-5">
        <span className="font-mono font-bold text-xl  dark:text-white">
          Sources
        </span>
        <div className="h-[2px] w-full bg-neutral-100 rounded-full" />
      </div>
      <ul className="list-disc flex flex-col gap-3">
        {sourceUrls.map((item, index) => {
          return (
            <li key={index} className="text-[#a245ed] flex gap-3">
              <a
                href={item as any}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-500 dark:text-white hover:text-[#a245ed] transition-all"
              >
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SourceSection
