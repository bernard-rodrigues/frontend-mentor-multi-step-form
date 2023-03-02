import styled from "styled-components";
import { StepControl2 } from "../Step2/style";

export const Step4Container = styled.div`
    h1{
        color: ${props => props.theme.marineBlue};
        font-family: 'Ubuntu700';
        font-size: 24px;
    }

    p{
        margin-top: 6px;
        margin-bottom: 22px;
        font-family: 'Ubuntu400';
        font-size: 16px;
        line-height: 25px;
        color: ${props => props.theme.coolGray};
    }

    #summary{

        background-color: ${props => props.theme.alabaster};
        padding: 16px 16px 3px 16px;

        .summaryHeader{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 8px;
            
            h2{
                font-family: 'Ubuntu500';
                color: ${props => props.theme.marineBlue};
                font-size: 15.1px;
            }

            #changer{
                font-family: 'Ubuntu400';
                font-size: 14px;
                color: ${props => props.theme.coolGray};
                text-decoration: underline;
                text-decoration-thickness: 2px;
                margin: -5px 0 0 0;
            }

            div{
                color: ${props => props.theme.marineBlue};
                font-family: 'Ubuntu700';
                font-size: 14px;
            }
        }

        hr{
            margin-bottom: 13px;
        }

        .addOn{
            display: flex;
            justify-content: space-between;
            margin-bottom: 11px;

            h3{
                font-family: 'Ubuntu400';
                color: ${props => props.theme.coolGray};
                font-size: 14px;
            }

            span{
                font-family: 'Ubuntu400';
                color: ${props => props.theme.marineBlue};
                font-size: 14px;
            }
        }
    }

    #total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 16px 10px 16px;

        h3{
            font-family: 'Ubuntu400';
            color: ${props => props.theme.coolGray};
            font-size: 14px;
        }

        p{
            font-family: 'Ubuntu700';
            font-size: 15.5px;
            margin: 0;
            color: ${props => props.theme.purplishBlue};
        }
    }
`

export const Confirm = styled(StepControl2)`
    .next{
        background-color: ${props => props.theme.purplishBlue};
    }
`