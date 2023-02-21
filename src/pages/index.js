import Head from 'next/head'
import Image from 'next/image'
import { Chivo , Raleway } from '@next/font/google';
const chivo = Chivo({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });
import { BsArrowUpRight } from 'react-icons/bs'
import styles from '@/styles/Home.module.scss'
import SliderImg from '@/components/sliderImg';
import Exp from '@/components/exp';




export default function Home() {
  return (
    <>
      <Head>
        <title>Magical Kenya</title>
        <meta name="description" content="Magical Kenya Website clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={` ${styles.hero} `} >
        <div className={`container ${styles.heroCont} `}>
          <div className="flex items-start">
             <div className="first-chivo">
                <h1 className={` ${chivo.className} ${styles.magical} `}>Magical</h1>
              </div>  
          </div>
          <div className={` ${styles.mid} `}>
            <div className={` ${styles.midtext} `}>
              <p className={`w-4/5 text-white `}>
              Magical Kenya Signature Experiences Collection are curated unique, authentic and exceptional once in a lifetime Kenya travel experiences.
              Magical Kenya Signature Experiences Collection are curated unique, authentic and exceptional once in a lifetime Kenya travel experiences.

              </p>
            </div>
            <div className="second-chivo">
                <h1 className={` ${styles.Travel} `}> Travel </h1>
            </div>
          </div>
          <div className="flex items-start">
             <div className="L-chivo">
             <h1 className={` ${chivo.className} ${styles.magical} `}>Expiriences.</h1>
              </div>  
          </div>

        </div>
      </section>
      {/* --- */}
      <section className="bg-green-main p-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center ">
              Mtwapa Creek <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center">
               Longonot National Park <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center ">
              Diani Beach <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center ">
              Mt. Kenya <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center " >
              Punda Milia <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
            <div className="dest-cont p-3 text-white inline-flex justify-around items-center ">
              Serengeti National Park <span className={`${styles.Arrowup}`}> <BsArrowUpRight/> </span>
            </div>
          </div>
        </div>
      </section>
      {/* -- */}
      <section className={` ${styles.abtSec} bg-white p-5`}>
        <div className="container">
          <div className="grid grid-cols-3 gap-5">
            <div className="tetx-holder col-span-2">
              <p> Why Us</p>
              <h1 className={` ${chivo.className} ${styles.abrH1}`} >
              Rediscover the Magic.
              </h1>
              <p className={` w-2/3 ${raleway.className} ${styles.abrText}`}>
              Kenya is home to intimate awe-inspiring, and magical travel experiences. All year round, visitors enjoy exhilarating wildlife experiences, the breathtaking outdoors and landscapes, the tranquil and adventure of Kenya’s coast, the enriching cultural encounters, and the warmth of the Kenyan people.
              </p>
            </div>
            <div className="img-holder">
                <Image src="/jiraf.jpeg" width={350} height={500} alt="magicalkenya_logo" className={`${styles.girrafe}`}/>
            </div>
          </div>
        </div>
        {/* image slider with GSAP Effects  */}
        {/* ? fluidy and wavy motion */}
        <div className={` ${styles.slider} `}>
          <SliderImg/>
        </div>
      </section>
      {/* -exp section- */}
      <section className={` ${styles.expSec} `}>
        <Exp/>
      </section>




      {/* pre footer sec */}
      <section className={`${styles.preFooter} p-7 `}>
          <div className="container">
              <div className="flex items-center justify-start">
                  <h2 className={`  ${chivo.className} ${styles.footer}`}>
                  Signature <br/>
                  Experiences.
                  </h2>
              </div>
              <hr className={ `${styles.prLine} ` }/>
          </div>
      </section>
    </>
  )
}
