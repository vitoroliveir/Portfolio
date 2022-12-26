import Reset from "../styles/gereric/reset.js"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto:wght@500;900&display=swap" rel="stylesheet"></link>
            <link rel="shortcut icon" href="/image/logo.ico" />
            <title>Portfólio</title>
          </Head>
          <Component {...pageProps} />
        </>
        )
  
}

        export default MyApp
