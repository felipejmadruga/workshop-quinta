import CharacterList from '@/app/componentes/CharacterList/CharacterList'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start px-24 py-12 bg-slate-800">
      <CharacterList />
    </main>
  )
}