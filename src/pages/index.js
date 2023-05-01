import Head from 'next/head'
import Link from 'next/link'
import {
  Body,
  IconIoLogoWhatsap,
  LinkHome,
  ImageHome,
  ConteinerTextWelcome,
  Button,
  ImageSocial,
  About,
  ImageI,
  Tecs,
  ImageTecs,
  Projects,
  Contact,
  FormContact,
  ImageFrase,
  ImageSocial2,
  Form
} from '../styles/index'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import FormContacts from '../components/FormContact'
import HardSkills from '../components/HardSkills'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  return (
    <Body>
      <Head>
        <title>Portfólio Pessoal</title>
        <meta name="description" content="portfolio pessoal vitor" />
        <link rel="icon" href="/image/logo.ico" />
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
            src="/image/Home_art.svg" s
            alt="home"
            fill
          />
        </ImageHome>

        <ImageSocial>
          <a href='https://github.com/vitoroliveir' target="_blank">
            <Image
              src="/image/Git.svg"
              alt="home"
              width="40"
              height="38"

            />
          </a>

          <a href='https://www.linkedin.com/in/vitor-oliveira-26820b177/' target="_blank">
            <Image
              src="/image/Linkedin.svg"
              alt="home"
              width="40"
              height="38"

            />
          </a>
          <a href='https://wa.me/5561995736332' target="_blank">
            <IconIoLogoWhatsap />
          </a>

        </ImageSocial>

      </LinkHome>

      <About data-aos="fade-right">

        <h1>Vitor de Oliveira Costa</h1>

        <p>
          My name is Vitor de Oliveira Costa 👋
          I&apos;m from Brazil, Brasilia/DF. graduated in Systems Analysis and Development.
        </p>

        <h2><span>Hard</span> Skills</h2>

        <Tecs>
          <HardSkills data-aos="zoom-in" stack={"Python"} percent={3} />

          <HardSkills data-aos="zoom-in" stack={"HTML"} percent={4} />

          <HardSkills data-aos="zoom-in" stack={"React"} percent={4} />

          <HardSkills data-aos="zoom-in" stack={"PHP"} percent={3} />

          <HardSkills data-aos="zoom-in" stack={"Node.js"} percent={3} />

          <HardSkills data-aos="zoom-in" stack={"ReactNative"} percent={3} />

          <HardSkills data-aos="zoom-in" stack={"JavaScript"} percent={4} />

          <HardSkills data-aos="zoom-in" stack={"CSS"} percent={4} />

          <HardSkills data-aos="zoom-in" stack={"MySQL"} percent={4} />

          <HardSkills data-aos="zoom-in" stack={"Java"} percent={2} />
        </Tecs>
      </About>

      <Projects>
        <div data-aos="fade-right">
          <h1><span>Meu</span> Portfólio</h1>
          <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
        </div>

      </Projects>

      <Contact>
        <p>Minha jornada esta apenas começando, sempre aprendendo</p>

        <FormContact>
          <div>
            <h1>Connect with me:</h1>
            <p>Satisfied with me? Please contact me</p>
          </div>


        </FormContact>

        <ImageFrase>
          <Image
            src="/image/aspas.svg"
            alt="home"
            width={90}
            height={90}
          />
        </ImageFrase>

        <p>“<span>Aprender</span> é a unica coisa que <span>a mente não se cansa</span>, nunca tem medo e nunca se arrepende”</p>
        <h1>~Leonardo da Vinci</h1>

        <ImageSocial2 >
          <a href='https://github.com/vitoroliveir' target="_blank">
            <Image
              src="/image/Git.svg"
              alt="home"
              width="40"
              height="38"

            />
          </a>

          <a href='https://www.linkedin.com/in/vitor-oliveira-26820b177/' target="_blank">
            <Image
              src="/image/Linkedin.svg"
              alt="home"
              width="40"
              height="38"

            />
          </a>
          <a href='https://wa.me/5561995736332' target="_blank">
            <IconIoLogoWhatsap />
          </a>

          <a href='mailto:vitoroliveira732@gmail.com' target="_blank">
            <Image
              src="/image/sms.png"
              alt="home"
              width="40"
              height="38"
              data-aos="zoom-in"
            />
          </a>


          <Form>
            <FormContacts />
          </Form>

        </ImageSocial2>
      </Contact>
    </Body>
  )
}
