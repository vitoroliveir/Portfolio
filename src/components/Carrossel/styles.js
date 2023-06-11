import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index:100;
    top:50px;

    height: 300px;
    width: 60vw;
    border-radius: 15px;

    .slick-prev:before,
    .slick-next:before{
        font-size: 40px;
        color: var(--gray-200);
        
    }
    .slick-prev:before{
        margin-left: -19px;
        color: var(--gray-200);
    }
`;

export const Card = styled.div`      
    width: 40vw;
    height: 400px;
    border-radius: 15px;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: #000;
    }

`
