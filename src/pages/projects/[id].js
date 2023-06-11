import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
    Container,
    Slider,
    About,
    UseTec,
    ToReplace,
    Back,
    Content,
    IconBiLinkExternal,
    ButtonLink,
    IconBiArrowBack,
    Repository,
    IconBiLogoGithub,
    IconBsArrowUpShort,
    Up,
    Footer,
    ImageSocial,
    IconIoLogoWhatsap
} from '../../styles/projects';
import Carrossel from '../../components/Carrossel';
import Sidebar from '../../components/Sidebar';

export default function projects() {
    const router = useRouter()
    const id = router.query.id

    return (
        <Container>
            <Sidebar />
            <h1>TradeNext</h1>

            <ButtonLink><IconBiLinkExternal />Visit the website</ButtonLink>
            <Slider>
                <Carrossel></Carrossel>
            </Slider>

            <About>
                <ToReplace><span>About</span> this project</ToReplace>
                <Content>
                    Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a
                    React web application build on top of the Electron framework.
                </Content>
                <Content>
                    At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design,
                    PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized
                    grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.
                </Content>
            </About>

            <UseTec>
                <ToReplace><span>Technical</span> Sheet</ToReplace>
                <Content>
                    Code technologies I got involved with while working on this project.
                </Content>
                <ul>
                    <li>UI/UX Architecture</li>
                    <li>UI/UX Animations</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Webpack</li>
                    <li>Electron</li>
                    <li>Javascript ES6</li>
                    <li>CSS3 – CSS Modules, SASS, PostCSS</li>
                    <li>HTML5 – semantic, video, canvas</li>
                </ul>
            </UseTec>

            <Up><IconBsArrowUpShort /></Up>

            <Repository><IconBiLogoGithub /> Repository</Repository>

            <Back><IconBiArrowBack />Back</Back>


            <Footer>
                <p>© copyright 2023. Vitor de oliveira costa - Todos os Direitos Reservados.</p>
                <ImageSocial>
                    <a href='https://github.com/vitoroliveir' target="_blank" rel="noreferrer">
                        <Image
                            src="/image/Git.svg"
                            alt="home"
                            width="30"
                            height="25"
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/vitor-oliveira-26820b177/' rel="noreferrer" target="_blank">
                        <Image
                            src="/image/Linkedin.svg"
                            alt="home"
                            width="30"
                            height="25"
                        />
                    </a>
                    <a href='https://wa.me/5561995736332' target="_blank" rel="noreferrer">
                        <IconIoLogoWhatsap />
                    </a>
                </ImageSocial>
            </Footer>
        </Container>
    );
}