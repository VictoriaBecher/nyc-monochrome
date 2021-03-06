import Head from 'next/head';

export default function Test() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <i className="fa-solid fa-phone"></i>
      Hello
      <i className="fa-solid fa-phone"></i>
      <button className="button button-new">New in</button>
      <a className="button">test</a>
    </div>
  );
}
