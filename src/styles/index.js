import styled from 'styled-components';

export const Body = styled.div`
    background-color:white;
    width:100vw;
    height:3850px;

    @media (min-width:412px) {
        height:3960px;
    }

    @media (min-width:622px) {
        height:3800px;
    }

    @media (min-width:829px) {
        height:3680px;
    }

    @media (min-width:1037px) {
        height:3550px;
    }
`

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
        color:#445964;
    }

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 75px;
        color:#445964;

        margin-top:30px;

        span{
            color:#263138;
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
        color:#445964;
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

    @media (min-width:412px) {
        width:136px;
        margin:15px;
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
        color:#445964;
        width:10px;
        span{
            color:#263138;
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

        color: #445964;

        position:relative;
        left:-2%;
        top:100px;

        @media (min-width:410px) {
            top:100px;
            width:400px;
        } 

        @media (min-width:845px) {
            left:23%;
            top:15px;
            width:350px;
        }


    }

    div{
        &:nth-child(1){
            position:relative;
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
    top:2000px;

    p{
        position:relative;
        top:80px;
        font-family: "Roboto";
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color:#445964;
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
        top:120px;
        font-family: "Roboto";
        font-size: 25px;
        font-weight: 900;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: center;
        color:#263138;

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
    height:50vh;
    background-color:#576E7AD9;
    border-radius:20px;

    @media (min-width:412px) {
        width:80vw;
        height:50vh;
    }


`

export const ImageFrase = styled.div`
    position:relative;
    width:5px;
    height:5px;
    top:20px;
    left:-40px;
    

`