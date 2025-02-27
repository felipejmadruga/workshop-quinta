'use client'
import CharacterDetails from '@/app/componentes/CharacterDetails/CharacterDetails';
import { use } from 'react';

interface CharacterParams {
    params: Promise<{id: string}>
}

export default function Character({ params }:CharacterParams) {
  const { id } = use(params);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-24 py-4 bg-slate-800">
      <h1 className='font-bold text-4xl mb-8 text-white'>Character {id}</h1>
      <CharacterDetails id={id}/>
    </main>
  )
}