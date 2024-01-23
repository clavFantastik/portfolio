
import Typed from 'typed.js';
import { styles } from "../styles";
import { useEffect, useRef } from 'react';


const Hero = () => {
  const el = useRef(null);
  const el2 = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<p className="blue-text"><i className="span_terminal">~ </i>&nbsp; sudo npm create vite@latest portfolio</p>^1000 </br></br> `<p>Installing packages...</p>` ^1800 </br> `<p>Installing react, react-dom, and react-scripts...</p>`^1800 </br> <p>●^100●^100●^100●^100●^100●^100●●^100●^100●^300●^500●^400●^300●^100●^100●^100●^700●^500●^400●^100●^100●^100 `</p>` </br> `<p>added 1426 packages in 21s</p>` </br> `<p>Happy hacking!</p>` </br></br> `<p><i className="span_terminal">~</i> &nbsp;` ^1000 clear</p> ^700'],
      typeSpeed: 100,
      backSpeed: 5,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gradient-to-r from-pink-600 to-pink-600' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Artyom</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications 
            
          </p>
        </div>

      </div>

      <div className={`absolute inset-0 top-[45%]  max-w-7xl mx-auto ${styles.paddingX}  `}>

      <div className="fakeMenu">
      <div className="fakeButtons fakeClose"></div>
      <div className="fakeButtons fakeMinimize"></div>
      <div className="fakeButtons fakeZoom"></div>
      </div>

    <div className="fakeScreen">
    
      <span className='p_terminal' ref={el}></span>
    </div>
    </div>

     
    
    </section>
  );
};

export default Hero;
