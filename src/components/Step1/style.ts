import styled from "styled-components";

export const Step1Container = styled.div`
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

    .inputText{
        display: flex;
        flex-direction: column;

        label{
            font-size: 12px;
            font-family: 'Ubuntu400';
            color: ${props => props.theme.marineBlue};
        }

        input{
            height: 40px;
            margin-top: 1px;
            margin-bottom: 14px;
            border: ${props => props.theme.lightGray} 1px solid;
            border-radius: 3px;
            padding-left: 14px;
            font-size: 15px;

            &:focus{
                outline: none;
                border: ${props => props.theme.purplishBlue} 1px solid;
            }

            &::placeholder{
                font-family: 'Ubuntu500';
                ${props => props.theme.coolGray}
            }
        }
    }
`

export const StepControl = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 74px;
    background-color: ${props => props.theme.white};
    width: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: end;

    .next{
        width: 97px;
        height: 40px;
        background-color: ${props => props.theme.marineBlue};
        color: ${props => props.theme.white};
        font-family: 'Ubuntu500';
        font-size: 14px;
        border-radius: 4px;
    }
`