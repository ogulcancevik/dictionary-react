import { BASE_URL } from './urls'

const fetchDictionary = async (word: string) => {
  const response = await fetch(BASE_URL + `/${word}`)
  const data = await response.json()
  return data
}

export const dictionaryService = {
  fetchDictionary,
}