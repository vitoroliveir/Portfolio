import Head from 'next/head'
import {
  Body,
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
  ImageFrase
} from '../styles/index'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  },[])

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

          <Button data-aos="fade-right">Saiba mais sobre mim</Button>

        </ConteinerTextWelcome>
        <ImageHome>
          <Image
            src="/image/Home_art.svg"
            alt="home"
            fill
          />
        </ImageHome>

        <ImageSocial data-aos="zoom-in-right">
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

      <About data-aos="fade-right">
        <ImageI>
          <Image
            src="/image/vitor.jpg"
            alt="vitor"
            fill
            
          />
        </ImageI>

        <h1>Vitor de Oliveira Costa</h1>

        <p>
          My name is Vitor de Oliveira Costa 👋
          I'm from Brazil, Brasilia/DF. graduated in Systems Analysis and Development.
        </p>

        <h2><span>Hard</span> Skills</h2>


        <Tecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/python.svg"
              alt="python"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/html.svg"
              alt="html"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/react.svg"
              alt="react"
              fill
            />
          </ImageTecs >
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/php.svg"
              alt="php"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/node.svg"
              alt="node"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/reactnative.svg"
              alt="reactnative"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/javascipt.svg"
              alt="javascript"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/css.svg"
              alt="css"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/mysql.svg"
              alt="mysql"
              fill
            />
          </ImageTecs>
          <ImageTecs data-aos="zoom-in">
            <Image
              src="/image/java.svg"
              alt="java"
              fill
            />
          </ImageTecs>
        </Tecs>
      </About>

      <Projects>
        <div>
          <h1><span>Meu</span> Portfólio</h1>
          <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
        </div>
        
      </Projects>

      <Contact>
        <p>Minha jornada esta apenas começando, sempre aprendendo</p>

        <FormContact>

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
      </Contact>
    </Body>
  )
}
