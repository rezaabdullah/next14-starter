// import Link from "next/link";
"use client";
import { useState } from "react";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import Image from "next/image";

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
    ];

    const[open, setOpen] = useState(false)

    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link=>(
                    // <Link href={link.path} key={link.title}>{link.title}</Link>
                    <NavLink item={link} key={link.title}/>
                ))}{
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}}/>
                    )
                }
            </div>
            {/* <button className={styles.menuButton} onClick={()=>setOpen(prev=>!prev)}>Menu</button> */}
            <Image src={"/menu.png"} alt="" width={32} height={32} onClick={()=>setOpen(prev=>!prev)} className={styles.menuButton}/> 
            {
                open && <div className={styles.mobileLinks}>
                    {links.map(link=>(
                        <NavLink item={link} key={link.title}/>
                    ))}
                </div>
            }
        </div>
    );
  };
  
  export default Links;