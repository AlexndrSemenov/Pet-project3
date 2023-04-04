import { MaynLayout } from '@/components/MainLayout';
import Router from "next/router";
import React from "react";
import Link from "next/link";

type myArray = 
  {posts:[{
  id: number,
  title: string,
  body: string
}]}

export default function Posts( posts:myArray) {
  
  // данный вариант не подходит т.к. с сервера не приходит готовый html => страница не индексируется поисковыми машинами
  // const[posts, setPosts] = useState([]);
  
  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch('http://localhost:4200/posts');
  //     const json = await response.json();
  //     setPosts(json);
  //   }
  //   load();
  // }, [])
  
  const ClickHandler = () => {
    Router.push('/');
  }

  return (
    <MaynLayout>
      <h1>Posts page</h1>
      <button onClick={ClickHandler}>Go back to home</button>
      {/* <pre>{JSON.stringify(posts)}</pre> - можем проверить содержимое posts */}
      <ul>
        {posts.posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
          ))
        }
      </ul>
    </MaynLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts = await response.json();
  return {props: {posts}};
}

//как вариант можно на бэке загружать данные через getInitialProps:
// Posts.getInitialProps = async () => {
//   const response = await fetch('http://localhost:4200/posts');
//   const posts = await response.json();
//   return {posts};
// }