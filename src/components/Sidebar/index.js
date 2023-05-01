import React, { useEffect, useState } from 'react';
import Image from 'next/image'

import { Container, Links, Logo } from './styles';

export default function Sidebar() {
    const [scrolled ,setScrolled] = useState(false)

    
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset;
          if (scrollPosition > 0) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

    return (
        <Container scroll={scrolled}>
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