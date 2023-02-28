import styled from "styled-components";

export const Step4Container = styled.div`
    h1{
        color: ${props => props.theme.marineBlue};
        font-family: 'Ubuntu700';
        font-size: 24px;
    }

    p{
        margin-top: 6px;
        margin-bottom: 19px;
        font-family: 'Ubuntu400';
        font-size: 16px;
        line-height: 25px;
        color: ${props => props.theme.coolGray};
    }

    #summary{
        height: 148px;
        background-color: ${props => props.theme.alabaster};
        padding: 0 16px;

        h2{
            font-family: 'Ubuntu500';
            color: ${props => props.theme.marineBlue};
            font-size: 15.1px;
        }

        #changer{
            font-family: 'Ubuntu400';
            font-size: 14px;
            text-decoration: underline;
            color: ${props => props.theme.coolGray};
        }

        .summaryHeader{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`