import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    color: ${props => props.theme.textC};
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background-color: ${props => props.theme.backgroundCdark};
        border-left: 4px solid ${props => props.theme.border};
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`

const DropdownLink = styled(Link)`
    background: ${props => props.theme.backgroundClight};
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.textC};
    font-size: 18px;

    &:hover {
        background: ${props => props.theme.border};
        cursor: pointer;;
    }
`

export function SidebarMenu({ item }) {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav)
    }  

    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened : item.subNav
                        ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.title} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    );
}