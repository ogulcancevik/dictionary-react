export interface IDictionary {
  word: string
  phonetic: string
  phonetics: IPhonetic[]
  meanings: IMeaning[]
  license: ILicense
  sourceUrls: string[]
}

export interface IPhonetic {
  text: string
  audio: string
  sourceUrl?: string
  license?: ILicense
}

export interface ILicense {
  name: string
  url: string
}

export interface IMeaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: any[]
}

export interface Definition {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}