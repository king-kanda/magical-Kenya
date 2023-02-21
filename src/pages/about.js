import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/about.module.scss'
import { Chivo , Raleway } from '@next/font/google';
const chivo = Chivo({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

const About = () => {

    return (
        <>
            <Head>
                <title>About Us | Magical Kenya</title>
                <meta name="description" content="Magical Kenya Website clone" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="hero-abt p-5">
                    <div className={`container ${styles.heroAbt}`}>
                        <h1 className={`${chivo.className} ${styles.MainH}`}>
                            <span className='text-orange'>Travelling</span> to go 
                           <br/> Higher
                        </h1>
                    </div>
                    <div className='container flex items-center justify-center'>
                        <p className={`text-center  w-1/2 ${styles.abtText} ${chivo.className}`}>
                            Our team has been taking care of your trips for more than 30 years and we are over the moon about it.
                        </p>
                    </div>
                </section>
                <section className="shifty_image">
                    <div className="container">
                        <div className="flex items-center justify-center">
                            <Image className={`${styles.traveler}`} src="/healthy.jpeg" width={700} height={400} alt="shifty_image"/>
                        </div>
                    </div>
                </section>
                {/*  */}
                <section classsName={`${styles.marq}  `}>
                    
                    <div className="mar-cont p-9">
                        <marquee  className={`${chivo.className} ${styles.marqueeH2}`} >
                                Magical*Signature*adventures
                        </marquee>
                    </div>
                </section>


                    <div className='container flex items-center justify-center p-9 mb-7'>
                        <p className={`text-center w-2/3 ${styles.travel}`}>
                        Travel connoisseurs dedicated to manage your business trips with comfort and safety.
                        Throughout our way, we have always been a family, giving a personal touch to every travel need. It is with the same personal care that our community handles today’s & tomorrow’s requests from our customers.

                        </p>
                    </div>
             
                
                <section className={` ${styles.vissionSec} `}>
                    <div className="container">
                        <div className="flex items-center justify-start">
                            <h2 className={` w-3/5 ${chivo.className} ${styles.visionH2}`}>
                                Vision to seamlessly handle and protect our customers’ trips combining human interaction with digital innovation.
                            </h2>
                        </div>
                    </div>
                </section>

                {/* blog section  */}
                <section className={`${styles.blogSec} `}>

                </section>

                {/* pre footer sec */}
                <section className={`${styles.preFooter} p-7 `}>
                    <div className="container">
                        <div className="flex items-center justify-start">
                            <h2 className={`  ${chivo.className} ${styles.footer}`}>
                            Travel Chaser.
                            </h2>
                        </div>
                        <hr className={ `${styles.prLine} ` }/>
                    </div>
                </section>
        </main>
        </>
       
    );
}

export default About;