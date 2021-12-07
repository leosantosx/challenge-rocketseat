import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1200px;
    margin: 2rem 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 2rem; */
    width: 100vw;
    img{
        width: 90%;
        margin-left: auto;
        margin-top: 5rem;
    }

    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 90vh;

        h1{
            color: #4d4d4d;
            font-weight: bold;
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;
            margin-bottom: 3rem;
        }

        p{
            font-size: 1.5rem;
            font-family: sans-serif;
            line-height: 2rem;
            color: #4d4d4d;
        }

        a {
            margin-top: 20px;
            list-style-type: none;
            color: white;
            background-color: #1e90ff;
            padding: 0 20px;
            height: 40px;
            cursor: pointer;
            width: 50%;
            text-align: center;
            border-radius: 0.25rem;
            line-height: 40px;
            text-decoration: none;
            font-size: 1.2rem;
            font-family: sans-serif;
            transition: background 200ms;

            &:hover{
                background-color: #1e90aa;
            }
        }



    }
`