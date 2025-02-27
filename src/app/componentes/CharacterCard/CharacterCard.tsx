import Link from "next/link";
import { Character } from "../CharacterList/CharacterList";

type Props = {
    character: Character
}

export default function CharacterCard({character}:Props) {	
  return (
    <div key={character.id} className="flex flex-col items-center justify-around gap-4 bg-slate-200 rounded-xl p-10 w-80">
      <div className="flex flex-col items-center gap-4 justify-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-40 h-40 rounded-full"
        />
        <p className="text-slate-800 font-bold text-xl text-center">{character.name}</p>
      </div>
      <Link href={`/character/${character.id}`} className='text-slate-200 bg-slate-800 p-4 rounded-xl font-semibold'>
        Mais Detalhes
      </Link>
    </div>
  )
}