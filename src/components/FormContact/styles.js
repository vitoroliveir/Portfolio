import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    height: 30vh;
    display: flex;
    flex-direction:column;
    align-items:center;

    input{
        border:solid 1px var(--gray-50) ;
        border-radius: 8px;
        width: 80vw;
        height: 50px;
        margin: 5px;
        background-color:var(--gray-50) ;
        padding-left: 15px;;

        ::placeholder{
            font-family: "Poppins";
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            position: relative;
            left: 3px;
         }
    }

    textarea{
        height: 80px;
        width: 80vw;
        margin-left:5px ;
        border-radius: 8px;
        background-color:var(--gray-50) ;

        overflow-x: hidden;
        padding-left: 15px;
        padding-top: 15px;

        ::placeholder{
            font-family: "Poppins";
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
            position: relative;
            top:4.5vh;
            left: 3px;
         }
    }

    h1{
        font-family: "Poppins";
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color:var(--whiter-100);

        width: 80vw;

        position: absolute;
        top:-8vh;
    }

    button{
        height: 53px;
        width: 50vw;
        border-radius: 15px;
        border:0px;
        margin-left: 8px;
        margin-top: 5px;
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0.0125em;
        text-align: center;


        color: var(--whiter-100);
        background-color: var(--gray-300);

    }


    @media (min-width:412px) {
        
        input {
            width: 65vw;
            margin-left:1vw;
        }

        textarea{
            width: 65vw;
            margin-left:1vw;
            ::placeholder{
                top:2vh;
            }
        }

        h1{
            width: 70vw;
        }

        button{
            width: 35vw;
        }
    }

    @media (min-width:1037px) {
        width: 40vw;
        input {
            width: 30vw;
        }

        textarea{
            width: 30vw;
        }

        h1{
            width: 38vw;
        }

        button{
            width: 200px;
            position: relative;
            left: 0.5vw;
            top: 10px;
        }
        
    }


`;