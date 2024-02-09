import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  // console.log("Let's check where it works!");
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About agency</h2>
        <h1 className={styles.title}>We create unique customer experience</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
          Aliquam faucibus purus in massa tempor nec feugiat.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>6+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Projects completed</p>
          </div>
          <div className={styles.box}>
            <h1>250k+</h1>
            <p>Revenue generated</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        {/* <Image src={"/about.png"} alt="" width={500} height={500} style={{width: "100%", height: "auto"}}/> */}
        <Image src={"/about.png"} alt="" fill className={styles.img}/>
      </div>
    </div>
  );
};

export default AboutPage;