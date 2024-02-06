import Image from "next/image";
import styles from "./homepage.module.css"

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Crafting digital success</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Vel facilisis volutpat est velit.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brand}>
        <Image src={"/brands.png"} alt="" fill className={styles.brandImg}></Image>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src={"/hero.gif"} alt="" fill className={styles.heroImg}></Image>
    </div>
  </div>;
};

export default Home;