import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-green-main text-white p-8">
                <div className="container">
                    <div className="flex items-center justify-between p-4">
                        <div className="footer-info">
                            <p>
                               © 2022 Namiri All Rights Reserved
                            </p>
                            <p>
                                Design :  Namiri Creatives   Developement : Okanda Steven
                            </p>
                        </div>
                        <div className="footer-logos flex items-center justify-space">
                            <div className="footer-logo p-4">
                                <Image src="/nav-logo.svg" width={150} height={100} alt="magicalkenya_logo"/>
                            </div>
                            <div className="footer-logo p-4">
                                <Image src="/SVGLogo.svg" width={100} height={100} alt="magicalkenya_logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;