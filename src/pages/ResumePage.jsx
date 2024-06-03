// imports my resume
import resumePdf from '../assets/eugene-resume.pdf'
const skills = ['JavaScript ES6+', 'CSS3', 'HTML5', 'SQL', 'NoSQL', 'GitHub', 'MongoDB', 'Postgres', 
                'Express', 'React', 'Node', 'Handlebars', 'jQuery', 'Bootstrap'];

export default function ResumePage() {
    return (
        <div className="m-3 p-3">
            <h2 className="text-center">My Resume</h2>
            <div className="resume text-center">
                <p className='resume-text'>Here is a link to download my resume: </p>
                {/* creates link to download resume */}
                <a
                    className='resume-link' 
                    href={resumePdf} 
                    target="_blank" 
                    download="resume.pdf">
                        My Resume
                </a>   
            </div>
            <div className='text-center'>
                <h2 className='text-center p-3 m-3'>Technical Skills</h2>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}