import { useLayoutEffect, useState } from 'react';
import styles from '@/styles/exp.module.scss';
import { Chivo , Raleway } from '@next/font/google';
const chivo = Chivo({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
const animation = { duration: 50000, easing: (t) => t }

const Exp = () => {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX-10, y: e.clientY-100 });
    };

   
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        mode: "free-snap",
        drag: true,
        created(s) {
        s.moveToIdx(5, true, animation)
        },
        updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
          perView: 4,
          spacing: 15,
        },
      })

    return (
        <section className={styles.expBd} onMouseMove={handleMouseMove}>
            <div
            className={styles.customCursor}
            style={{ top: cursorPosition.y, left: cursorPosition.x }}
            >
                {/* .. */}
                Explore.
            </div>
            <section className={` ${styles.expSlider} `}>
                <div className={` ${styles.expSliderCont} `}>
                    <div className={` container p-6 ${styles.expSliderContLeft} `}>
                        <h1 className={` ${chivo.className} w-2/3 `} >
                        Experiences that await 
                        your arrival.
                        </h1>
                    </div>

                    {/* slider again */}
                    <div ref={sliderRef} className="keen-slider">
                    <div className={`keen-slider__slide ${styles.numberSlide1}`}>
                        <Image className={` ${styles.sliderImage} `} src="/creeks.png" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide2}`}>
                        <Image className={` ${styles.sliderImage} `} src="/malasyia.png" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide3}`}>
                        <Image className={` ${styles.sliderImage} `} src="/namiri.png" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide4}`}>
                        <Image className={` ${styles.sliderImage} `} src="/viet.png" alt="Picture of the author" width={400} height={300} /> 
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide5}`}>
                        <img className={` ${styles.sliderImage} `} src="https://plus.unsplash.com/premium_photo-1661663638915-31e215cd21fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwbG9jYXRpb25zfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="Picture of the author" width={700} height={700} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide6}`}>
                        <img className={` ${styles.sliderImage} `} src="https://images.unsplash.com/photo-1529528070131-eda9f3e90919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbCUyMGxvY2F0aW9uc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=400&q=60" alt="Picture of the author" width={500} height={300} />
                    </div>
                </div>
                </div>
            </section>
        </section>
    );
}

export default Exp;