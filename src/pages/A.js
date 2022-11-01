import React from "react";
import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../recoil/data';
import styled from "styled-components";

const Warpper = styled.div`
    height: 100%auto;
    width: 100%auto;
    color: ${props => props.theme.textC};
    background-color: ${props => props.theme.backgroundC};
`;

export default function A() {
    const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

    return(
        <Warpper>
            <p>{darkMode ? 'ds' : 'aaa'}</p>
        </Warpper>
    );
}