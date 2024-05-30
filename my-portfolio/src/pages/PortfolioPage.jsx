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
                            <li>Links: <a href='https://github.com/UltimaVanguard/weather-forecast'>Github</a> | <a href='https://ultimavanguard.github.io/weather-forecast/'>Deployed Application</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Dynamo Tech Blog</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: Handlebars, CSS, JASS CSS Framework, JavaScript, Handlebars, Express, Postgres, Sequelize, bcrypt, dotenv</li>
                            <li>Key Functionality: Allows users to sign in/signup, create new blog posts, update their existing blog posts, and add comments to posts</li>
                            <li>Links: <a href='https://github.com/UltimaVanguard/dynamo-tech-blog'>Github</a> | <a href='https://tech-blog-1eh9.onrender.com/'>Deployed Application</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Employee Tracker</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: JavaScript, Inquirer, postgres, express</li>
                            <li>Key Functionality: CLI using inquirer. Can add and search employees, new roles, and new departments. You can also update the roles of employees.</li>
                            <li>Links: <a href='https://github.com/UltimaVanguard/employee-tracker'>Github</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Social Media API</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: JavaScript, Express, Mongoose</li>
                            <li>Key Functionality: Backend allows users to be created, updated, deleted, and users to retrieved by ID, or all at once. A user can also add or remove friends. Additionally allows thoughts to created, updated, deleted and retrieved by id, or all of them. Reactions can be added or removed from thoughts. Deleting a user deletes all of their thoughts.</li>
                            <li>Links: <a href='https://github.com/UltimaVanguard/social-media-api'>Github</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>SMI: Movie n Games</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: HTML, CSS, JavaScript, Chota CSS Framework, jquery, RAWG API, omdb API</li>
                            <li>Key Functionality: Let's a user search for either a movie or game based on title. They can select a game or movie they want to see more information about and add it to a list to keep track of.. The list is separated by into movies/games and saved via local storage/</li>
                            <li>Links: <a href='https://github.com/UltimaVanguard/smi-movie-n-games'>Github</a> | <a href='https://ultimavanguard.github.io/smi-movie-n-games/'>Deployed Application</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>RecipeShare</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Tech Used: CSS, JavaScript, Handlebars, JASS CSS Framework, Cloudinary</li>
                            <li>Key Functionality: Users can sign in/signup. They're session keeps them logged in for a day. You can add a new recipe of your own or while searching can add a recipe that you like to your list. While adding a recipe you can add a picture to go along with it.</li>
                            <li>Links: <a href='https://github.com/UltimaVanguard/recipe-share'>Github</a> | <a href='https://recipeshare-usf5.onrender.com/'>Deployed Application</a></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default HomePage;