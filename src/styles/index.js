import styled from 'styled-components';

export const Body = styled.div`
    background-color:#E5E5E5;
    width:100%;
    height:100vh;
`

export const LinkHome = styled.div`
        position:absolute;
        top:20%;
`

export const ImageHome = styled.div`
        position:absolute;
        left:1vw;
        display: block;
        width:350px;
        height:350px;
        top:-8vw;
        
        @media (min-width:412px) {
            width:400px;
            height:400px;
            left:7vw;
            top:-3vh;
        }

        @media (min-width:501px) {
            width:500px;
            height:500px;
            left:7vw;
            top:-7vh;
        }

        @media (min-width:656px) {
            left:18vw;
            
        }

        @media (min-width:950px) {
            left:45vw;
            top:0vh;
        }

        @media (min-width:1600px) {
            left:55vw;
        }
`

export const ConteinerTextWelcome = styled.div`
        position:absolute;
        left:5vw;
        top:48vh;


        >h1{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 900;
            font-size: 42px;
            line-height: 50px;

            color: #445964;
        }

        p{
            font-family: 'Roboto';
            font-size: 17px;
            font-weight: 500;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: left;
            color: #445964;
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


        @media (min-width:501px) {
            top:45vh;
            left:25vw;
        }

        @media (min-width:950px) {
            top:2vh;
            left:10vw;
        }

        @media (min-width:1600px) {
            left:28vw;
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

        background: #263138;
        border-radius: 20px;
        border:0 ; 

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;

        color: #FFFFFF;

        @media (min-width:412px) {
            left:1vw;
        }

        @media (min-width:501px) {
            left:-15vw;
        }

        @media (min-width:950px) {
            top:155%;
            left:-0.5vw;
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

        @media (min-width:501px) {
            top:67vh;
            left:60vw;
        }

        @media (min-width:950px) {
            top:45vh;
            left:10vw;
          
        }

        @media (min-width:1600px) {
            left:27.5vw;
        }
`
