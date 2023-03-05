import React from 'react';
import Footer from './components/Footer';
import Menu from "./components/Menu";

export default function App() {
  return (
  <div className="bg-zinc-800">
    <div className="container mx-auto h-screen">
      <Menu />
      <Footer />
    </div>
  </div>
  );
}

