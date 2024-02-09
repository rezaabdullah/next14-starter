import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
// import Error from "next/error";

// query and parameters
// const BlogPage = ({params, searchParams}) => {
  // console.log(params);
  // console.log(searchParams);

  // fetch data
const getData = async() => {
  // fetching data with default behavior
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/")

  // fetching data with no-store cache
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"})

  // fetching data with revalidation
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate: 3600}})
  // const res = await fetch("https://dummyjson.com/posts")
  if(!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json();
}


const BlogPage = async() => {
  const posts = await getData();

  // return <div className={styles.container}>
  //   <div className={styles.post}>
  //     <PostCard/>
  //   </div>
  //   <div className={styles.post}>
  //     <PostCard/>
  //   </div>
  //   <div className={styles.post}>
  //     <PostCard/>
  //   </div>
  //   <div className={styles.post}>
  //     <PostCard/>
  //   </div>
  // </div>;

  return(
    <div className={styles.container}>
      {/* test */}
      {posts.map((post) => {
          <div className={styles.post} key={post.id}>
            <PostCard post={post}></PostCard>
          </div>
          // <div>{post.id}</div>
      })}
    </div>
  );
};

export default BlogPage;