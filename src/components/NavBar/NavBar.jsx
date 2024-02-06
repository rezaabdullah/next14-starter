import Links from "./Links/Links";
import styles from "./navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <Links></Links>
            </div>
        </div>
    );
  };
  
  export default NavBar;