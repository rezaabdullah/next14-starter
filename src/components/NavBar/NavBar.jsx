import Link from "next/link";
import Links from "./Links/Links";
import styles from "./navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links></Links>
            </div>
        </div>
    );
  };
  
  export default NavBar;