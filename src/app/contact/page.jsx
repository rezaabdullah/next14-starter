"use client"; // disable SSR on specific compoment (hydrationTest.jsx)
import Image from "next/image";
import styles from "./contactpage.module.css";
// import { useEffect, useState } from "react"; disable SSR on specific compoment (hydrationTest.jsx)
// import HydrationTest from "@/components/hydrationTest"; dynamic import for disabling SSR
import dynamic from "next/dynamic";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false});

const ContactPage = () => {
  // hydration error explanation (ex1)
  // SSR != CSR
  // const a = Math.random();
  // console.log(a);

  // hydration error solution 1: useEffect (ex2)
  // const[isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, [])
  const a = Math.random();
  console.log(a);

  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="" fill className={styles.img}></Image>
    </div>
    {/* {a}; ex1 */}
    {/* {isClient && a}; ex2 */}
    <div className={styles.formContainer}>
      {/* <HydrationTestNoSSR /> */}
      <div suppressHydrationWarning>{a}</div>
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
        {/* <button onClick={() => console.log("clicked")}>Send</button> */}
        <button>Send</button>
      </form>
    </div>
  </div>;
};

export default ContactPage;