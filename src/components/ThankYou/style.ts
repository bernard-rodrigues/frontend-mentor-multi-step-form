import styled from "styled-components";

export const ThankYouContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        width: 56px;
        margin-top: 52px;
    }

    h1{
        font-family: 'Ubuntu700';
        font-size: 24px;
        color: ${props => props.theme.marineBlue};
        margin-top: 20px;
    }

    p{
        font-family: 'Ubuntu400';
        color: ${props => props.theme.coolGray};
        margin-top: 6px;
        margin-bottom: 64px;
    }
`