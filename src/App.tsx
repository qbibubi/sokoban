import Menu from "./components/Menu";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="wrapper bg-zinc-800 h-screen">
      <div className="container mx-auto h-full">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

