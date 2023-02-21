import Head from 'next/head'
import Image from 'next/image'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | 404</title>
                <meta name="description" content="Magical Kenya Website clone" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold underline">
                    Hey ! Traveller - Eish
                </h1> 
                <div className="flex items-center justify-center">
                    <Image src="/404.svg" width={400} height={400} alt="404_image"/>
                </div>
                <h1 className="text-xl font-semibold ">
                    Lets get you back <a  href="/" className="text-green-main">Home</a>
                </h1> 

            </main>
            
        </>
       
    );
}

export default NotFound;