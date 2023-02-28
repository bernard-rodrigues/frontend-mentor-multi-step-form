import styled from 'styled-components';
import { StepControl } from '../Step1/style';

export const Step2Container = styled.div`
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

    #monthly-yearly{
        width: 100%;
        height: 48px;
        border-radius: 10px;
        background-color: ${props => props.theme.alabaster};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;

        span{
            font-family: 'Ubuntu500';
            font-size: 14px;
            color: ${props => props.theme.coolGray};

            &.active{
                color: ${props => props.theme.marineBlue};
            }
        }

        .SwitchRoot {
            width: 38px;
            height: 20px;
            background-color: ${props => props.theme.marineBlue};
            border-radius: 30px;
            position: relative;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        .SwitchThumb {
            position: absolute;
            top: 50%;
            left: 4px;
            display: block;
            width: 12px;
            height: 12px;
            background-color: white;
            border-radius: 9999px;
            box-shadow: 0 2px 2px var(--blackA7);
            transition: left 100ms;
            transform: translateY(-50%);
            will-change: transform;
        }
        
        .SwitchThumb[data-state='checked'] {
            left: calc(100% - 4px - 12px);
        }
    }
`

export const PlanCard = styled.div`
    border: 1px black solid;
    border-radius: 10px;
    padding: 0 16px;
    height: 77px;
    display: flex;
    align-items: center;
    border: 1px ${props => props.theme.lightGray} solid;
    transform: translate(0, 2px);
    margin-bottom: 12px;

    img{
        height: 40px;
        width: 40px;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 13px;

        h2{
            font-family: 'Ubuntu500';
            font-size: 15.8px;
            color: ${props => props.theme.marineBlue};
            transform: translate(0, 2px);
        }

        p{
            margin: 0;
            font-family: 'Ubuntu400';
            font-size: 14px;
        }

        .free{
            color: ${props => props.theme.marineBlue};
            font-family: 'Ubuntu400';
            font-size: 12px;
        }
    }

    &.active{
        border: 1px ${props => props.theme.purplishBlue} solid;
        background-color: ${props => props.theme.alabaster};
    }

`

export const StepControl2 = styled(StepControl)`
    justify-content: space-between;

    .previous{
        font-family: 'Ubuntu500';
        font-size: 14px;
        color: ${props => props.theme.coolGray};
    }
`