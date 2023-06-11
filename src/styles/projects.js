import styled from 'styled-components';

import { BiLinkExternal, BiArrowBack } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";


export const IconIoLogoWhatsap = styled(IoLogoWhatsapp)`
    width: 30px;
    height: 25px;
    color:var(--gray-200);
`;

export const IconBiLinkExternal = styled(BiLinkExternal)`
    height: 20px;
    width: 20px;
    color: white;
`;

export const IconBsArrowUpShort = styled(BsArrowUpShort)`
    height: 40px;
    width: 20px;
    color: white;
`;

export const IconBiLogoGithub = styled(AiFillGithub)`
    height: 20px;
    width: 20px;
    color: white;
`;

export const IconBiArrowBack = styled(BiArrowBack)`
    height: 20px;
    width: 20px;
    color: white;
`;

export const Container = styled.div`
    background-color:var(--whiter-100);
    
    h1{
        font-family: "Roboto";
        font-size: 45px;
        font-weight: 900;
        text-align: left;

        color: var(--gray-300);

        position: absolute;
        top:15vh;
        left: 10vw;
        display: flex;
        justify-content: start;

        span{
            color: var(--gray-200);
        }
    }
`;

export const Back = styled.button`
    width: 90px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color:var(--gray-300);
    color: black;
    position: absolute;
    left: 5vw;
    top: 165vh;
    cursor: pointer;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    :hover{
        background-color: var(--gray-200);
        
    }
`


export const Repository = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color:var(--gray-300);
    color: black;
    position: absolute;
    left: 10vw;
    top: 150vh;
    cursor: pointer;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    :hover{
        background-color: var(--gray-200);
        
    }
`

export const Slider = styled.div`
    position: relative;
    top: 20vh;
    display: flex;
    justify-content: center;
`

export const ToReplace = styled.h2`
    font-family: "Roboto";
    font-size: 30px;
    font-weight: 900;
    line-height: 42px;
    text-align: left;
    
    color: var(--gray-300);

    span{
        color: var(--gray-200);
    }
`

export const About = styled.div`
    position: absolute;
    top: 75vh;
    left: 10vw;

`

export const UseTec = styled.div`
    position: absolute;
    top: 110vh;
    left: 10vw;

    height: 500px;

    ul {
        list-style-type: disc;
        font-family: "Roboto";
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        text-align: left;
        color: var(--gray-200);
        position: relative;
        left: 10vw;
        margin-top: 20px;
    }
`

export const Content = styled.p`
    font-family: "Roboto";
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    text-align: left;
    color: var(--gray-200);
    width: 68vw;
    position: relative;
    left: 5vw;
    margin-top: 20px;


`
export const ButtonLink = styled.button`
    height: 40px;
    width: 180px;
    border-radius: 15px;
    border: none;

    position: absolute;
    top:15vh;
    left: 70vw;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color:var(--gray-300);
    color:white;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;

    :hover{
        background-color:var(--gray-200);
    }


`

export const Up = styled.button`
    height: 60px;
    width: 30px;
    border-radius: 15px;
    border: none;
    z-index: 1000;

    position: fixed;
    top:88vh;
    left: 90vw;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color:var(--gray-300);
    color:white;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;

    :hover{
        background-color:var(--gray-200);
    }
`


export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 140vh;
    padding-bottom: 20px;
    padding-top: 15px;

    border-top: solid var(--gray-300) 1px;

    p{
        width: 400px;
        display: flex;
        align-items: center;
        text-align: center;
        font-family: "Roboto";
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        color: var(--gray-200);

    }
`
export const ImageSocial = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:104px;
    position:absolute;
    left: 87vw;
    top: 2.5vh;
    cursor: pointer;
`
