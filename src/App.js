import './App.css';
import { useEffect, useState } from 'react';
import Features from './components/Features';
import HeaderSec from './components/HeaderSec';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proccess from './components/Proccess';
import Footer from './components/Footer';
import Brands from './components/Brands';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StartWorking from './components/StartWorking';
import PreLoader from './components/PreLoader';
import BackToTop from "./assets/images/webp/backtotop.webp"
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  // ---------------------aos-------------------
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  });
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------preloader---------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className='overflow-x-hidden'>
            <HeaderSec />
            <Features />
            <Proccess />
            <Brands />
            <StartWorking />
            <Footer />
            <div>
              <img onClick={() => top()} src={BackToTop} alt="Arrow" className={`${backToTop ? "back_to_top_position position-fixed cursor_pointer" : "d-none"} updown_animation`} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
