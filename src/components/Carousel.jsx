import Carousel from 'react-bootstrap/Carousel';
import carouselImage1 from '../images/leagueoflegendsrankedanalysis.jpg';
import carouselImage2 from '../images/carousel2.jpg';
import carouselImage3 from '../images/carousel3.jpg';
import carouselImage4 from '../images/hr project.png'
import carouselImage5 from '../images/old website.jpg'
import './Carousel.css';

const ProjectCarousel = () => (
    <div className='carousel-background'>
        <h2 className='carousel-title'>Check Out My Projects Below!</h2>
        <div className='carousel-wrapper'>
            
            <Carousel>
                <Carousel.Item>
                    <a href="https://github.com/eddiez123/League-of-Legends-Data-Analysis" target="_blank" rel="noopener noreferrer">
                        <img
                            className="carousel-img"
                            src={carouselImage1}
                            alt="First slide"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>League of Legends Ranked Analysis</h3>
                        <p>A statistical analysis on over 10,000 ranked games to determine
                            what the most important factors of a winning game are.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/eddiez123/Recidgerator" target="_blank" rel="noopener noreferrer">
                        <img
                            className="carousel-img"
                            src={carouselImage3}
                            alt="Second slide"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Recidgerator</h3>
                        <p>A web page designed to simulate a home fridge. Employs Express, Node,
                            and Apache.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/eddiez123/HR-Employee-Portal" target="_blank" rel="noopener noreferrer">
                        <img
                            className="carousel-img"
                            src={carouselImage4}
                            alt="Third slide"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>HR Employee portal</h3>
                        <p>
                            A web app simulating an HR portal for both employees and employers. Implements
                            React, Redux, Angular, alongside Express, Node, and MongoDB with MVC architecture.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/eddiez123/eddiez123.github.io" target="_blank" rel="noopener noreferrer">
                        <img
                            className="carousel-img"
                            src={carouselImage5}
                            alt="Third slide"
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Portfolio Website</h3>
                        <p>
                            The code for this website! See my progress when I first picked up HTML/CSS/JS, and how it
                            transitioned into things like Bootstrap, Tailwind, and eventually React.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    </div>
);

export default ProjectCarousel;