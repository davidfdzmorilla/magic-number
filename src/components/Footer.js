import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer>
      <div />
      <a href='https://davidfdzmorill.dev' className='link-portfolio'>davidfdzmorilla.dev</a>
      <div className="social-icons">
        <a href='https://github.com' ><FaGithubSquare /></a>
        <a href='https://www.linkedin.com/in/davidfdzmorilla/'><FaLinkedin /></a>
      </div>
    </footer>
  )
}
