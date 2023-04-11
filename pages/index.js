import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      Home Page <br />
      <Link href={'/blogs'}>
        Go To Blogs
      </Link> <br />
      <Link href={'/products'}>
        Go To Products
      </Link> <br />
      <Link href={'/posts'}>
        Go To posts
      </Link> <br/>
      <Link href={'/news'}>
       Go to News
      </Link>
    </>
  )
}
