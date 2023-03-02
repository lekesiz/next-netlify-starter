import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mikail Lekesiz" />
        <p className="description">
          mikail@lekesiz.org
        </p>
        <form name="login" method="POST" data-netlify="true">
        <p>
            <label>Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Password: <input type="password" name="password" /></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  )
}
