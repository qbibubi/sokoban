import { useState } from 'react'

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
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-stone-850">
      <div className="text-3xl bold text-sky-400 pb-2">Sokoban</div>
      <button className="text-neutral-50" onClick={handleClickPlay}>Play</button>
      <button className="text-neutral-50">Scoreboard</button>
    </div>
    </>
  );
}
