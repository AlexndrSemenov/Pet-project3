import Link from "next/link";
import { MaynLayout } from '@/components/MainLayout';

export default function Home() {
  return (
    <MaynLayout>
      <h1>Hello, word!</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa aperiam asperiores expedita, tenetur similique suscipit adipisci quia laudantium tempore. Doloremque velit officia in fugiat corrupti distinctio sit molestiae harum inventore.</p>
      <p><Link href='/about'>About</Link></p>
      <p><Link href='/posts'>Posts</Link></p>
    </MaynLayout>
  )
}
