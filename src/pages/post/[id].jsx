import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";
import {RxExit} from "react-icons/rx";
export default function () {
  const router = useRouter();
  let { id } = router.query;
 
  const imgPost = "https://picsum.photos/600/400?"

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if(router.isReady)
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);

  return (
    <div className={styles.dPost}>
      <Image 
      src={imgPost+id}
      width={450}
      height={250}
      alt='image'
      />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <div className={styles.container}>
          <Link href='/'><RxExit/></Link>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// export async function getStaticProps({ params }) {
//   const { id } = params;
//   //   const res = await fetch(`https://dummyjson.com/post/${id}`);
//   //   const posts = await res.json();

//   return {
//     props: {
//       //   posts: posts.posts,
//     },
//   };
// }
