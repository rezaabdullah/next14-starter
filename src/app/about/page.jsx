import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About agency</h2>
        <h1>We create unique customer experience</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
          Aliquam faucibus purus in massa tempor nec feugiat.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>6+</h1>
            <p>Years of experience</p>
          </div>
          {/* <div className={styles.box}></div>
          <div className={styles.box}></div> */}
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={"/about.png"} alt="" fill/>
      </div>
    </div>
  );
};

export default AboutPage;