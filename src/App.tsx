import Menu from "./components/Menu";
import Footer from './components/Footer';
import Game from './components/Game';

export default function App() {
  return (
    <div className="wrapper bg-zinc-800 h-screen">
      <div className="container mx-auto h-full">
        <Menu />
        <Game />
      </div>
      <Footer />
    </div>
  );
}

