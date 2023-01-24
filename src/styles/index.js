import styled from 'styled-components';
import { IoLogoWhatsapp } from "react-icons/io";

export const Body = styled.div`
    background-color:var(--whiter-100);
    width:100vw;
    height:4370px;

    @media (min-width:412px) {
        height:4180px;
    }

    @media (min-width:622px) {
        height:4030px;
    }

    @media (min-width:829px) {
        height:3400px;
    }

    @media (min-width:1037px) {
        height:3770px;
    }
`

export const IconIoLogoWhatsap = styled(IoLogoWhatsapp)`
    width: 40px;
    height: 38px;
    color:var(--gray-200);
`;

export const LinkHome = styled.div`
        position:absolute;
        top:17%;

        @media (min-width:553px) {
            top:25%;
        }
`

export const ImageHome = styled.div`
        position:absolute;
        left:1vw;
        display: block;
        width:350px;
        height:350px;
        top:-8vw;
        
        animation-name:moveImage;
        animation-duration:2s;

        @media (min-width:412px) {
            width:400px;
            height:400px;
            left:7vw;
            top:-3vh;
        }

        @media (min-width:553px) {
            width:500px;
            height:500px;
            left:7vw;
            top:-7vh;
        }

        @media (min-width:656px) {
            left:10vw;
            
        }

        @media (min-width:700px) {
            left:23vw;
            
        }

        @media (min-width:1120px) {
            left:53vw;
            top:0vh;
        }

        @media (min-width:1600px) {
            left:55vw;
        }

        @keyframes moveImage {
            from{
                opacity:0;
                transform: translateY(3%);
            }
            to{
                opacity:1;
                transform: translateY(0);
            }
        }
`

export const ConteinerTextWelcome = styled.div`
        position:absolute;
        left:5vw;
        top:48vh;

        animation-name:moveText;
        animation-duration:2s;

        >h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-size: 42px;
            line-height: 50px;

            color: var(--gray-200);
        }

        p{
            font-family: 'Roboto';
            font-size: 17px;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: left;
            color: var(--gray-200);
            margin-top:7px;
            margin-bottom:7px;

        }

        @media (min-width:412px) {
            top:45vh;

            >h1{
                font-size: 50px;
            }

            p{
                font-size: 20px;
            }
        }


        @media (min-width:553px) {
            top:45vh;
            left:25vw;
        }

        @media (min-width:1120px) {
            top:2vh;
            left:10vw;
        }

        @media (min-width:1600px) {
            left:20vw;
        }

        @keyframes moveText {
            from{
                opacity:0;
                transform: translateX(-6%);
            }
            to{
                opacity:1;
                transform: translateX(0);
            }
        }
`

export const Button = styled.button`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:center;

        position: absolute;
        top:110%;
        left:10vw;
        width: 250px;
        height: 62px;

        background: var(--gray-300);
        border-radius: 20px;
        border:0 ; 
        cursor:pointer;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;

        color: var(--whiter-100);

        @media (min-width:412px) {
            left:1vw;
        }

        @media (min-width:553px) {
            left:-15vw;
        }

        @media (min-width:1120px) {
            top:155%;
            left:-0.3vw;
        }

        @media (min-width:1600px) {
            
        }
`

export const ImageSocial = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        width:174px;
        position:absolute;
        top:88vh;
        left:27vw;

        @media (min-width:412px) {
            top:67vh;
            left:60vw;
        }

        @media (min-width:553px) {
            top:67vh;
            left:60vw;
        }

        @media (min-width:1120px) {
            top:45vh;
            left:10vw;
          
        }

        @media (min-width:1600px) {
            left:19.2vw;
        }

        @keyframes moveText {
            from{
                opacity:0;
                transform: translateX(-6%);
            }
            to{
                opacity:1;
                transform: translateX(0);
            }
        }
`

export const About = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    position:relative;
    top:1028px;

    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 25px;
        line-height: 75px;
        color:var(--gray-200);
    }

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 75px;
        color:var(--gray-200);

        margin-top:30px;

        span{
            color:var(--gray-300);
        }
    }

    p{
        margin-top:10px;
        width:95vw;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color:var(--gray-200);
    }

    @media (min-width:412px) {
        top:1100px;
        h1{
            font-size: 30px;
        }

        p{
            width:95vw;
        }
    }

    @media (min-width:553px) {
        top:1200px;
    }

    @media (min-width:636px) {
        h1{
            font-size: 36px;
        }

        p{
            width:600px;
        }
    }

    @media (min-width:1120px) {
        top:1088px;
    }


`;

export const ImageI = styled.div`
    width:207px;
    height:174px;

    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    top:-50px;
`;

export const Tecs = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:80vw;
    

`;

export const ImageTecs = styled.div`
    width:120px;
    height:98px;
    position:relative;
    margin:10px;

    animation-name:moveTexts;
    animation-duration:2s;

    @media (min-width:412px) {
        width:136px;
        margin:15px;
    }

    @keyframes moveTexts {
            from{
                opacity:0;
                transform: translateX(-20%);
            }
            to{
                opacity:1;
                transform: translateX(0);
            }
        }
    

`;

export const Projects = styled.div`
    position:relative;
    top:1300px;
    
    h1{
        font-family: 'Roboto';
        font-size: 50px;
        font-weight: 900;
        letter-spacing: 0em;
        text-align: left;
        color:var(--gray-200);
        width:10px;
        span{
            color:var(--gray-300);
        }

    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        width:350px;

        color: var(--gray-200);

        position:relative;
        left:-2%;
        top:100px;

        @media (min-width:410px) {
            top:100px;
            width:400px;
        } 

        @media (min-width:845px) {
            left:70%;
            top:15px;
            width:350px;
        }


    }

    div{
        &:nth-child(1){
            position:absolute;
            left:10vw;
            display:flex;
            flex-direction:row;
        } 
    }

    @media (min-width:510px) {
        top:1400px;
    }

    @media (min-width:1100px) {
        top:1350px;
    }

    
`

export const Contact = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:relative;
    top:2340px;

    p{
        position:relative;
        top:150px;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color:var(--gray-200);
        width:330px;

        &:nth-child(1){
            text-align: right;
            position:absolute;
            width:300px;
            top:-80px;
            left:10vw;
        } 
    }

    span{
        color:#263138;
        font-size: 19px;
        font-weight: 600;
    }

    h1{
        position:relative;
        top:180px;
        font-family: "Roboto";
        font-size: 25px;
        font-weight: 900;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: center;
        color:var(--gray-300);

    }

    @media (min-width:412px) {
        p{
            top:120px;
            width:400px;
            text-align: right;

            &:nth-child(1){
                width:300px;
                top:-80px;
                left:25vw;
            } 
        }

        h1{
            top:150px;
        }
    }

    @media (min-width:551px) {
        p{
            &:nth-child(1){
                left:30vw;
            } 
        }

    }

    @media (min-width:660px) {
        p{
            &:nth-child(1){
                left:40vw;
            } 
        }
    }

    @media (min-width:841px) {
        p{
            &:nth-child(1){
                left:45vw;
            } 
        }
    }


    @media (min-width:1000px) {
        p{
            &:nth-child(1){
                left:55vw;
            } 
        }
    }

    @media (min-width:1200px) {
        p{
            &:nth-child(1){
                left:60vw;
            } 
        }
    }


`

export const FormContact = styled.div`
    width:90vw;
    height:80vh;
    background-color:var(--gray-100);
    border-radius:20px;

    h1{
        font-family: "Poppins";
        font-size: 25px;
        font-weight: 600;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color:var(--black-100);
        margin-bottom:30px;

    }

    p{
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        color:var(--whiter-100);

    }

    div{
        &:nth-child(1){
          position:absolute;
          top:-20vh;
          left:10vw;

        } 
    }

    @media (min-width:412px) {
        width:80vw;
        height:70vh;

        div{
            &:nth-child(1){
                display:flex;
                flex-direction:column;

                left:15vw;
                top:-10vh;

                width:30vh;

            } 
        }
    }

    @media (min-width:622px) {
        height:80vh;
    }

    @media (min-width:829px) {
        height:70vh;
    }

    @media (min-width:1037px) {
        height:50vh;
    }


`

export const ImageFrase = styled.div`
    position:relative;
    width:5px;
    height:5px;
    top:50px;
    left:-40px;
    

`

export const ImageSocial2 = styled.div`
    width:60vw;
    display:flex;
    justify-content:space-between;
    position:absolute;
    top:20vh;
    left:15vw;

    @media (min-width:412px) {
        width:200px;
    }

    @media (min-width:1037px) {
        width:200px;
        left:15vw;
    }
`

export const Form = styled.div`
    position: absolute;
    left: -5vw;
    top: 18vh;

    @media (min-width:412px) {
        top: 15vh;
        left: -0.5vw;
    }

    @media (min-width:1037px) {
        left: 35vw;
        top: -5vh;
    }


`

