'use client'
import { useEffect, useState } from 'react'
import { Character } from '../CharacterList/CharacterList';

export default function CharacterDetails({ id }:{ id: string}) {
  const [data, setData] = useState<Character>()
 
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [id])

  return (
    <>
      {data && (
          <div key={data.id} className="flex flex-col items-center gap-4 bg-slate-200 text-slate-800 font-semibold text-xl p-10 rounded-xl">
            <img
              src={data.image}
              alt={data.name}
              className="w-60 h-60 rounded-xl object-contain"
            />
            <p className="text-2xl font-bold">Nome: {data.name}</p>
            <p>Espécie: {data.species}</p>
            <p>Situação: {data.status}</p>
            <p>Gênero: {data.gender}</p>
            <p>Origem: {data.origin?.name}</p>
            <p>Localização: {data.Location?.name}</p>
          </div>
        )
      }
    </>
  )
}