import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
//import MenuPosts from "../menuPosts/MenuPosts";
//import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            {/* <MenuPosts withImage={false} /> */}
            <div>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <br />
                            <span className={styles.date}>10 .3.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span
                            className={`${styles.category} ${styles.culture}`}
                        >
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <br />
                            <span className={styles.date}>10 .3.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <br />
                            <span className={styles.date}>10 .3.2023</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/p1.jpeg"
                            alt=""
                            fill
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span
                            className={`${styles.category} ${styles.fashion}`}
                        >
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            Lorem ipsum dolor sit amet.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>John Doe</span>
                            <br />
                            <span className={styles.date}>10 .3.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1> */}
            {/* <MenuCategories /> */}
            {/* <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1> */}
            {/* <MenuPosts withImage={true} /> */}
        </div>
    );
};

export default Menu;
