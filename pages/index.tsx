import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import styles from '../styles/Home.module.css'

interface HomePageProps {
  cookieSSR: any
}

const Home: NextPage<HomePageProps> = ({cookieSSR}) => {
  const [cookie, setCookie, removeCookie] = useCookies()
  console.log(cookieSSR);
  console.log(Object.keys(cookie).length);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => {setCookie('test', true, {path: '/'})}}>
        Click to set cookie
      </button>
      <button onClick={() => {removeCookie('test', {path: '/'})}}>
        Click to remove cookie
      </button>

      {(Object.keys(cookie).length ? cookie.test : cookieSSR.test) && <div>AUTH</div>}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

// @ts-ignore
export async function getServerSideProps({ req, res }) {
  return { props: {
    cookieSSR: req.cookies || '',
  }}
}

export default Home
