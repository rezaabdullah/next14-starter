import Image from "next/image";
import styles from "./contactpage.module.css"

const ContactPage = () => {
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="" fill className={styles.img}></Image>
    </div>
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Enter full name"></input>
        <input type="text" placeholder="Enter email address"></input>
        <input type="text" placeholder="Enter phone number"></input>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Message">
        </textarea>
        <button>Send</button>
      </form>
    </div>
  </div>;
};

export default ContactPage;