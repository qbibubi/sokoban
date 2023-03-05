import React from 'react';
import AuthorDetails from './components/AuthorDetails';
import Menu from "./components/Menu";
import Game from "./components/Game";

export default function App() {
  return (
  <div className="wrapper">
    <div className="container mx-auto bg-stone-500">
      <Menu />
      <Game />
      <AuthorDetails />
    </div>
  </div>
  );
}

