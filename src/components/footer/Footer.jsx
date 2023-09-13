import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image
                        src="/meredbg.png"
                        alt="mellisblog"
                        width={50}
                        height={50}
                        style={{ border: "0px solid red", borderRadius: "50%" }}
                    />
                    <h1 className={styles.logoText}>mellis.thedev</h1>
                </div>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Enim necessitatibus similique aspernatur obcaecati
                    veritatis. Aperiam cum porro sequi, totam minima
                    consequuntur, aspernatur deleniti vero repellendus dorales.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image
                        src="/youtube.png"
                        alt=""
                        width={18}
                        height={18}
                        style={{ borderRadius: "50%" }}
                    />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </Link>
                    <Link href="/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/MichealJWEllis"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Link>
                    <Link
                        href="https://michealjwellis.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
