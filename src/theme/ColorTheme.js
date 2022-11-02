const size = {
    mobile: "770px",
    desktop: "1700px"
}

const responeSize = {
    mobile: `(max-width: ${size.mobile})`,
    desktop: `(max-width: ${size.desktop})`
}

const lightTheme = {
    responeSize,
    backgroundClight: '#f8f9fa',
    backgroundC: '#f1f3f5',
    backgroundCdark: '#e9ecef',
    border: '#632ce4',
    iconC: '#212529',
    textC: '#212529'
}

const darkTheme = {
    responeSize,
    backgroundCdark: '#212529',
    backgroundC: '#343a40',
    backgroundClight: '#495057',
    border: '#632ce4',
    iconC: '#f8f9fa',
    textC: '#f8f9fa'
}

export const theme = {
    lightTheme,
    darkTheme,
}