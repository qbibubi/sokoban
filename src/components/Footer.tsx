import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';

export default function AuthorDetails() {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-stone-900">
      <footer className="flex flex-row justify-center items-center text-gray-500 pa-4">
        <div className="flex flex-row  pr-1">
          <span className="text-sm sm:text-center pr-1">Created by</span>
          <span className="text-sm sm:text-center pr-1 hover:text-white">Jakub</span>
          <span className="text-sm sm:text-center pr-1 hover:text-white">Sobieraj</span>
        </div>
        <div className="flex flex-row">
          <a className="hover:text-white" href="https://www.linkedin.com/in/jakub-sobieraj-11b96025a/"><AiFillLinkedin size={24}/></a>
          <a className="hover:text-white" href="https://www.github.com/qbibubi/sokoban"><AiOutlineGithub size={24}/></a>
          <a className="hover:text-white" onClick={() => {navigator.clipboard.writeText("QBI#1788")}}><FaDiscord size={24}/></a>
        </div>
      </footer>
    </div>
  ); 
}
