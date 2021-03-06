import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Rudianto';
export const siteTitle = 'Welcome to me site';

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon"
          href="/favicon.ico"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#0064d2"/>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Nextjs Starter with PWA' />
        <meta name='keywords' content='nextjs' />
        
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title"
          content={siteTitle}
        />
        <meta name="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile_square.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile_square.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>
              {' '}
              <span role="img"
                aria-label="arrow-back"
              >
                ⬅️
              </span>
              {' '}
              Back to home
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;