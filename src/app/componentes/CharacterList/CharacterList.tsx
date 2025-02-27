'use client'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    Location: Location
    image: string
    episode: string[]
    url: string
    created: string
    error: string
}
export interface Origin {
    name: string
    url: string
}
export interface Location {
    name: string
    url: string
}

export default function CharacterList() {
  const [data, setData] = useState<Character[]>([])
  const [seach, setSearch] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((Response) => Response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error))
  }, [])

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(seach.toLowerCase())
  )

  return (
    <>
      <h1 className='font-bold text-4xl mb-8 text-white'>Rick And Morty Characters</h1>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 px-4 rounded-xl text-zinc-400 font-bold w-60"
        placeholder="Pesquise um personagem"
      />
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8">
        {filteredData
          .map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
      </div>
    </>
  )
}