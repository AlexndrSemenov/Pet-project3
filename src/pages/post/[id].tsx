import { useRouter } from "next/router";
import { useState, useEffect} from "react";
import { MaynLayout } from '@/components/MainLayout';
import Link from "next/link";

type MyStructure1 = {post:{
  id: number,
  title: string,
  body: string
}}

type MyStructure2 = {
  query: {
    id: string | number,
  }
}

export default function Post(post: MyStructure1) {
  const [postt, setPostt] = useState(post.post)
  const router = useRouter();
  useEffect (() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const data = await response.json();
      setPostt(data);
    }

    if (!post.post) {
      load();
    }
  }, [post.post, router.query.id])

  if (!postt) {
    return <MaynLayout>
      <p>Loading ...</p>






    </MaynLayout>
         }

  return (
    <MaynLayout>
      <h1>{postt.title}</h1>
      <hr />
      <p>{postt.body}</p>
      <Link href={'/posts'}>Go back to all posts</Link>
    </MaynLayout>
  )
}

Post.getInitialProps = async (ctx:MyStructure2, req:MyStructure2) => {

  if (!req) {
    return {post: null}
  }

  const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
  const post = await response.json();
  return {post};
}
