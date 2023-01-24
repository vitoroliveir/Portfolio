import React from 'react';
import Image from 'next/image'

import { Container, Links, Logo } from './styles';

export default function Sidebar() {
    return (
        <Container>
            <Logo data-aos="fade-right">
                <Image
                    src="/image/Group.svg"
                    alt="logo"
                    width="36"
                    height="36"
                />
                <p>Vitor de oliveira</p>
            </Logo>

            <Links>
                <ul data-aos="zoom-in">
                    <li><a href='#home' >Home</a></li>
                    <li><a href='#sobre'>Sobre</a></li>
                    <li><a href='#portfolio'>Portfólio</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>

            </Links>
        </Container>
    );
}