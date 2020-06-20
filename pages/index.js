import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../libs/posts';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          illum assumenda! Nulla quo sapiente ex similique, debitis optio
          pariatur, eum nihil sequi cupiditate repellat labore nemo, accusamus
          totam exercitationem facere!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem}
              key={id}
            >
              <Link href="/posts/[id]"
                as={`/posts/${id}`}
              >
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData
    }
  };
}
