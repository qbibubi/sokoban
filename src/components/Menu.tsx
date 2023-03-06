import { useState } from 'react'
import MenuButton from './MenuButton'

export default function Menu(props: any) {
  const [ showScoreboard, setScoreboard ] = useState(false);
  function handleScoreboard() {
    setScoreboard(true);
  }

  return (
    <div className="flex flex-col min-h-full justify-center items-center bg-stone-850">
      <span className="text-5xl bold text-white pb-4">SOKOBAN</span>
      <MenuButton text="PLAY"/>
      <MenuButton text="SCOREBOARD" onClick={handleScoreboard}/>
    </div>
  );
}
