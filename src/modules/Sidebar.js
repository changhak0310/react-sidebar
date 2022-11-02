import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from "../data/SidebarData";
import { SidebarMenu } from "../components/SidebarSubMenu";
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../recoil/data';

const Nav = styled.div`
    background-color: ${props => props.theme.backgroundCdark};
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    transition: 350ms;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background-color: ${props => props.theme.backgroundC};
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;

    @media ${(props) => props.theme.responeSize.desktop} {
        width: 250px;
        top: 0px;
    }

    @media ${(props) => props.theme.responeSize.mobile} {
        width: 70px;
        top: 80px;
    }
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

export function SidebarModule() {
    const [sidebar, setSidebar] = useState(false);
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const changeMode = () => {
        console.log(darkMode)
        setDarkMode(!darkMode);
    }

    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
                <div onClick={changeMode}>
                    dsadsa
                </div>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </NavIcon>
                    {
                        SidebarData.map((item, index) => {
                            return <SidebarMenu item={item} key={index} />
                        })
                    }
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}