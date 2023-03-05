import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

export default function AuthorDetails() {
  return (
    <div className="flex flex-row">
      <div className="">Created by Jakub Sobieraj</div>
      <div className="flex flex-row">
        <AiFillLinkedin onClick={() => window.location.replace("https://www.linkedin.com/in/jakub-sobieraj-11b96025a/")} />
        <AiOutlineGithub onClick={() => window.location.replace("https://www.github.com/qbibubi")} />
      </div>
    </div>
  ); 
}
