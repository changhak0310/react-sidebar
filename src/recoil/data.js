import React from "react";
import { atom } from "recoil"

export const darkModeAtom = atom({
    key: 'darkMode',
    default: false,
})