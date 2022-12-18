import Head from 'next/head'
import {
  Body,
  LinkHome,
  ImageHome,
  ConteinerTextWelcome,
  Button,
  ImageSocial
} from '../styles/index'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <Body>
      <Head>
        <title>Portfólio Pessoal</title>
        <meta name="description" content="portfolio pessoal vitor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />

      <LinkHome>
        <ConteinerTextWelcome>
          <p>Olá pessoas, </p>
          <h1>EU SOU UM PROGRAMADOR</h1>
          <p>Seja bem-vindo ao meu portifólio website </p>

          <Button>Saiba mais sobre mim</Button>

        </ConteinerTextWelcome>
        <ImageHome>
          <Image
            src="/image/Home_art.svg"
            alt="home"
            fill
          />
        </ImageHome>

        <ImageSocial>
          <Image
            src="/image/Git.svg"
            alt="home"
            width="40"
            height="38"
          />
          <Image
            src="/image/Linkedin.svg"
            alt="home"
            width="40"
            height="38"
          />
          <Image
            src="/image/sms.png"
            alt="home"
            width="40"
            height="40"
          />
        </ImageSocial>

      </LinkHome>

    </Body>
  )
}
