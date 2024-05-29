import Accordion from 'react-bootstrap/Accordion';

function HomePage() {
    return (
        <div>
            <h2 className="text-center">My Portfolio</h2>
            <Accordion className='p-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Weather Forecast App</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: HTML, CSS, Bootstrap Framework, JavaScript, openweather API</li>
                            <li>Key Functionality: User can search for a city and the current weather and the weather for the next five days will be shown to them. Local storage is used to store their last ten searches.</li>
                            <li>Links:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Dynamo Tech Blog</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: Handlebars, CSS, JASS CSS Framework, JavaScript, Handlebars, Express, Postgres, Sequelize, bcrypt, dotenv</li>
                            <li>Key Functionality: Allows users to sign in/signup, create new blog posts, update their existing blog posts, and add comments to posts</li>
                            <li>Links:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Employee Tracker</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: JavaScript, Express, Mongoose</li>
                            <li>Key Functionality:</li>
                            <li>Links:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Social Media API</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: JavaScript, Express, Mongoose</li>
                            <li>Key Functionality:</li>
                            <li>About:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>SMI: Movie n Games</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: HTML, CSS, JavaScript, Chota CSS Framework, jquery</li>
                            <li>Key Functionality:</li>
                            <li>About:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>RecipeShare</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: CSS, JavaScript, Handlebars, JASS CSS Framework, Cloudinary</li>
                            <li>Key Functionality:</li>
                            <li>About:</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default HomePage;