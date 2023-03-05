import { useState } from 'react'
import MenuButton from './MenuButton'

export default function Menu(props: any) {
  function handleClickPlay(e:any) {
    props.running = true;
    console.log(props.running);
  }

  function handleClickScoreboard(e:any) {
    // show scoreboard
    // hige menu and game or hide them in the background
    // track 5 last game  // show scoreboard
  }

  return (
    <div className="flex flex-col items-center justify-center  bg-stone-850">
      <div className="text-5xl bold text-blue-400 pb-2">Sokoban</div>
      <MenuButton text="PLAY" />
      <MenuButton text="SCOREBOARD" />
    </div>
  );
}
