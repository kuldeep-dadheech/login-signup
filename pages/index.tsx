import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
        <h1 className="text-3xl font-bold underline">
           <Link href="./loginform">
        <a>Login Form</a>
      </Link>
        </h1>
      )
}

export default Home
