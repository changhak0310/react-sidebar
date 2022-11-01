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
    //background-color: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const IconStyle = styled.div`
    color: ${props => props.theme.iconC};
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