import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <main className={styles.main}>
      <h1>Service Tasker Website </h1>
      <p>B2B Solution End To End fro</p>
      <Link href="/blogs/"style={{background:'black' , padding:'10px' , color:'white'}}>Blogs (SSR)</Link>
      <Link href="/blog/" style={{background:'red' , padding:'10px', marginTop:'10px' , color:'white'}} >Blog  (CSR)</Link>
    </main>
  )
}
