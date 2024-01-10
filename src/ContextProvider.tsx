import { createContext } from 'react'
import { IDictionary } from './types/dictionary.types'

export const DictionaryContext = createContext([] as IDictionary[])
