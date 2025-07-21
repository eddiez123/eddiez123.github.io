import './Links.css';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa6';
import Resume from '../images/Resume 2024.pdf';

const Links = () => {
    return (
        <div className='link-bar'>
            <a href='https://github.com/eddiez123?tab=repositories' target="_blank" rel="noopener noreferrer">
                <FaGithub /> Github
            </a>
            <a href='https://www.linkedin.com/in/ezhou31/' target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> Linkedin
            </a>
            <div className='resume-link-bar'>
                <FaFilePdf /> Resume (
                <a href={Resume} download='EddieZhou_Resume.pdf' target="_blank" rel="noopener noreferrer">
                    Download
                </a>
                / 
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    View
                </a>
                )
            </div>
        </div>
    )
}

export default Links