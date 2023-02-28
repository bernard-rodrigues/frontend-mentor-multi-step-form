import styled from "styled-components";
import bgMobile from "../../assets/images/bg-sidebar-mobile.svg"

export const NavBar = styled.section`
    width: 100%;
    height: 172px;
    background-image: url(${bgMobile});
    background-size: cover;
    padding: 32px 98px;
    display: flex;
    justify-content: space-between;

    .stepNumber{
        height: 33px;
        width: 33px;
        color: ${props => props.theme.white};
        font-size: 14px;
        font-family: 'Ubuntu500';
        border: ${props => props.theme.white} solid 1px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &.active{
            background-color: ${props => props.theme.lightBlue};
            border: ${props => props.theme.lightBlue} solid 1px;
            color: ${props => props.theme.marineBlue};
        }
    }

    .stepDescription{
        display: none;
    }
`