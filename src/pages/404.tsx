import Link from "next/link";
import { MaynLayout } from '@/components/MainLayout';
import styles from '@/styles/Home.module.scss'

export default function ErrorPage() {

  return (
    <MaynLayout>
      <h1 className={styles.error}>Error 404</h1>
      <p>The page does not exist. Please <Link href='/'>go back</Link> to safety.</p>
    </MaynLayout>
  )
}
