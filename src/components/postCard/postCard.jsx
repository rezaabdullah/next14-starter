import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image 
                    src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <span className={styles.date}>07.02.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi voluptates laudantium nesciunt? Optio sint consequuntur facere ad repellat molestiae consequatur aliquam, quas adipisci numquam provident nulla nemo vero minus!</p>
            <Link href={"/blog/post"} className={styles.link}>READ MORE</Link>
        </div>
    </div>
}

export default PostCard