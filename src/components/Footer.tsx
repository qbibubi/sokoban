import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function AuthorDetails() {
  return (
    <footer className="mt-auto">
      <span className="text-sm text-gray-500 sm:text-center">Jakub Sobieraj</span>
      <div className="flex flex-row justify-center items-center">
        <AiFillLinkedin onClick={() => window.location.replace("https://www.linkedin.com/in/jakub-sobieraj-11b96025a/")} size={32}/>
        <AiOutlineGithub onClick={() => window.location.replace("https://www.github.com/qbibubi")} size={32}/>
      </div>
    </footer>
  ); 
}
