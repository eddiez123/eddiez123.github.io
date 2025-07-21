import './App.css'
import Background from './components/background.jsx'
import Navbar from './components/Navbar.jsx';
import ProjectCarousel from './components/Carousel.jsx';
import Links from './components/Links.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Background />
      <div className='carousel-background'>
        <ProjectCarousel />
      </div>
      <Links />
      
    </div>
  );
}

export default App;
