import { Link } from 'react-router-dom';

export default function ResumePage() {
    return (
        <div className="m-3 p-3">
            <h2 className="text-center">My Resume</h2>
            <div className="resume text-center">
                <p className='resume-text'>Here is a link to download my resume: </p>
                <Link
                    className='resume-link' 
                    to="https://docs.google.com/document/d/1ap4su9CRI4URm57JkluCtixLdzd_pgYrP_bdqIIh42o/edit?usp=sharing" 
                    target="_blank" 
                    download>
                        My Resume
                </Link>   
            </div>
        </div>
    )
}