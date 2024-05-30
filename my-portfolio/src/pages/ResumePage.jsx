import { Link } from 'react-router-dom';
import resumePdf from '../assets/eugene-resume.pdf'

export default function ResumePage() {
    return (
        <div className="m-3 p-3">
            <h2 className="text-center">My Resume</h2>
            <div className="resume text-center">
                <p className='resume-text'>Here is a link to download my resume: </p>
                <a
                    className='resume-link' 
                    href={resumePdf} 
                    target="_blank" 
                    download="resume.pdf">
                        My Resume
                </a>   
            </div>
        </div>
    )
}