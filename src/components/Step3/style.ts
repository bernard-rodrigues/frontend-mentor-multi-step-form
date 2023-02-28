import styled from "styled-components";

export const Step3Container = styled.div`
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


`

export const AddOnContainer = styled.div`
    border: ${props => props.theme.lightGray} 1px solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    padding: 0 16px 0 14px;
    margin-bottom: 12px;
    transform: translateY(3px);
    
    &.active{
        border: red 1px solid;
        border: ${props => props.theme.purplishBlue} 1px solid;
        background-color: ${props => props.theme.alabaster};

        .checkbox{
            background-color: ${props => props.theme.purplishBlue};
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
    .combo{
        display: flex;
        align-items: center;
        gap: 15px;

        .checkbox{
            height: 21px;
            width: 21px;
            border: ${props => props.theme.lightGray} 1px solid;
            border-radius: 4px;
        }
    
        .description{
            h2{
                margin: 0;
                font-family: 'Ubuntu500';
                font-size: 14px;
                transform: translateY(4px);
                color: ${props => props.theme.marineBlue};
            }
            
            p{
                margin: 0;
                font-family: 'Ubuntu400';
                font-size: 12px;
            }
        }
    }

    span{
        font-family: 'Ubuntu500';
        font-size: 12px;
        color: ${props => props.theme.purplishBlue};
        transform: translateY(1px);
    }
`