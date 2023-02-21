import Link from "next/link";
import Image from "next/image";
import {AiFillHome} from "react-icons/ai";
import styles from "@/styles/Navbar.module.scss";


const Navbar = () => {
    return (
        <>
        <div className="container ">
            <nav className="flex items-center justify-between">
                    <div className="p-4">
                        <Link href="/">
                             <Image src="/magical.png" width={70} height={70} alt="magicalkenya_logo"/>
                        </Link>
                    </div>
                    <div className="nav-hoolder">
                        <ul className="flex items-center justify-between">
                            <li className={`p-4 ${styles.link} `}>
                                <Link href="/">
                                     <span> <AiFillHome/></span>
                                </Link>
                            </li>
                            <li className={`p-4 ${styles.link} `}>
                                <Link href="/about">About Us </Link>
                            </li>
                            <li className={`p-4 ${styles.link} `}>
                                <Link href="/about"> Destination </Link>
                            </li>
                            <li className={`p-4 ${styles.link} `}>
                                <Link href="/about"> Stories </Link>
                            </li>
                          
                        </ul>
                    </div>
                    <div>
                        <button className="bg-orange text-white px-4 py-3 ">Book Now</button>
                    </div>
            </nav>
        </div>
        </>
    );
}

export default Navbar;