import styles from '@/styles/slider.module.scss'
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'

const SliderImg = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
          perView: 4,
          spacing: 15,
        },
      })

    return (
        <>
            <div className={` ${styles.slider} `}>
                <div ref={sliderRef} className="keen-slider">
                    <div className={`keen-slider__slide ${styles.numberSlide1}`}>
                        <Image className={` ${styles.sliderImage} `} src="/hero3.png" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide2}`}>
                        <Image className={` ${styles.sliderImage} `} src="/maldives.webp" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide3}`}>
                        <Image className={` ${styles.sliderImage} `} src="/franchesco.webp" alt="Picture of the author" width={400} height={300} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide4}`}>
                        <Image className={` ${styles.sliderImage} `} src="/mappy.webp" alt="Picture of the author" width={400} height={300} /> 
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide5}`}>
                        <Image className={` ${styles.sliderImage} `} src="/asad.webp" alt="Picture of the author" width={700} height={700} />
                    </div>
                    <div className={`keen-slider__slide ${styles.numberSlide6}`}>
                        <Image className={` ${styles.sliderImage} `} src="/lazy.webp" alt="Picture of the author" width={500} height={300} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderImg;