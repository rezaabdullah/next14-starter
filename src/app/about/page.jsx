import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return(
    <div className={styles.imgContainer}>
      {/* <Image src={"/about.png"} alt="" fill/> */}
      <Image src={"https://images.pexels.com/photos/3862615/pexels-photo-3862615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="" fill/>
    </div>
  );
};

export default AboutPage;