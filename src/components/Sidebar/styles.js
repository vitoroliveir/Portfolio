import styled from 'styled-components';

export const Container = styled.div`
    position:absolute;
    top:60px;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

export const Links = styled.div`
    position:absolute;
    left:55vw;
    ul{
        display:flex;
        flex-direction:row;
    }

    li{
        margin:15px;
    }

    a{
        width:51px;
        height:23px;
        color: var(--gray-200);
        text-decoration:none;
        font-size: 20px;
        font-family: 'Roboto';
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0em;

    }

    @media (max-width:850px){
        left:50vw;
    }

    @media (max-width:740px){
        display: none;
    }

    @media (min-width:1600px) {
        left:60vw;
    }
`;

export const Logo = styled.div`
    display:flex;
    flex-direction:row;
    position: absolute;
    width: 327px;
    height: 55px;
    position:absolute;
    left:5vw;

    >p{
        font-family: "Roboto";
        font-size: 36px;
        font-weight: 900;
        line-height: 42px;
        letter-spacing: 0em;

        margin-left:15px;

        color:var(--gray-200);
    }

    @media (min-width:1600px) {
        left:10vw;
    }

`;