import Image from "next/image";
import styles from "./singlepost.module.css"

const SinglePostPage = () => {
    return( 
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="" fill className={styles.img}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image
              src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="" className={styles.imgAvatar}
              width={64}
              height={64}
            />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>Abdullah Reza</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Publish Date</span>
              <span className={styles.detailValue}>07.02.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore, aliquam laborum laboriosam minima dolores eligendi possimus ipsa ut repellendus. Quibusdam a minus quis mollitia sed et distinctio unde maxime!
          </div>
        </div>
    </div>);
  };
  
  export default SinglePostPage;