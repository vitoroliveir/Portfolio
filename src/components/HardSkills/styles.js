import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:10px;
    width:120px;

    @media (min-width:412px) {
        width:136px;
        margin:15px;
    }

    h1{
        font-family: "Roboto";
        font-size: 25px;
        font-weight: 700;
        line-height: 42px;
        text-align: center;

    }
`;

export const Vecto = styled.div`
    width: 133px;
    display: flex;
    justify-content: space-between;
`;
