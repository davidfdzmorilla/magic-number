import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer>
      <div />
      <a href='https://davidfdzmorilla.dev' className='link-portfolio' target='_blank' rel='noreferrer nopener'>davidfdzmorilla.dev</a>
      <div className="social-icons">
        <a href='https://github.com/davidfdzmorilla/magic-number/' target='_blank' rel='noreferrer nopener' ><FaGithubSquare /></a>
        <a href='https://www.linkedin.com/in/davidfdzmorilla/' target='_blank' rel='noreferrer nopener'><FaLinkedin /></a>
      </div>
    </footer>
  )
}
