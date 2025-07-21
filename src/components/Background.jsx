import { Parallax } from 'react-parallax';
import backgroundImage from '../images/background-1.jpg'
import './Background.css'
import AboutMe from './AboutMe.jsx'
import Carousel from './Carousel.jsx'

const Background = () => (
    <Parallax
        className='background-image'
        bgImage={backgroundImage}
        strength={800}
        bgImageStyle={{
            objectFit: 'cover',
            height: '100%',
            width: '100%'
        }}
    >
        <div className='intro-card'>
            <div className='intro' id='typewriter'>
                Welcome to my portfolio.
            </div>
        </div>

        <AboutMe />
        

    </Parallax>
);

export default Background;