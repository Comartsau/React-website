import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

export const NavBar = styled.nav`
    background: #34a0ff;
    // height: 50px;
    height: ${props => props.show ? "auto" : "50px"};
    display: flex;
    align-items: center ;
    justify-content: space-between;
    padding: 0 50px ;

`

export const NavLogo = styled(Link)`
    display: flex ;
    align-items: center ;
    text-decoration: none ;
    font-size: 1.5rem ;
    font-weight: bold ;
    color:#ffff ;
    @media screen and (max-width: 768px) {
        display: none
    }
`

export const NavMenu = styled.ul`
    display: flex ;
    align-items: center ;
    list-style-type: none ;
    height: auto ;
    @media screen and (max-width: 768px) {
        // display: none ;
        display: ${props => props.show ? 'block' : 'none' }
    }
`

export const NavList = styled.li`
@media screen and (max-width: 768px) {
    padding: 1rem 0 ;
}
`

export const NavLink = styled(Link)`
    color: #fff ;
    display: flex ;
    align-items: center ;
    text-decoration: none ;
    padding: 0 1rem ;
    cursor: pointer ;
    &.active {
        color: #000;
    }

`

export const Bars = styled(FaBars)`
    color: #fff ;
    display:none;
    @media screen and (max-width:768px) {
        display: block;
        position: absolute ;
        top: 0 ;
        right:0 ;
        transform: translate(-100% , 70%) ;
        font-size: 1.3rem;
        cursor: pointer;
    }
`

export const FooterCon = styled.footer`
    background-color: #333 ;
    color: #fff ;
    text-align: center ;
    padding: 1rem ;
    position: fixed ;
    bottom: 0 ;
    width: 100% ;

`