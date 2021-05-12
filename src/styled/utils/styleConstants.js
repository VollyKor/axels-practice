export const screenSize = {
    xs: '320px',
    s: '375px',
    m: '425px',
    l: '768px',
    xl: '1024px',
    xxl: '1440px',
};

export const deviceSize = {
    extraSmall: `screen and(min-width: ${screenSize.xs})`,
    small: `screen and (min-width: ${screenSize.s})`,
    medium: `screen and (min-width: ${screenSize.m})`,
    large: `screen and (min-width: ${screenSize.l})`,
    extraLarge: `screen and (min-width: ${screenSize.xl})`,
    largest: `screen and (min-width: ${screenSize.xxl})`,
};

export const colors = {
    primary: '#5f2093',

    /* app variables */
    mainBgColor: '#E6E9F0',
    accentBgColor: '#F1F3F6',

    mainTextColor: '#5B1195',
    accentTextColor: '#808181',

    logoColor: '#c26ea9',
    cartLink: '#c90ea5',

    halfTransparentWhiteColor: 'rgba(255, 255, 255, 0.5)',

    whiteColor: '#fff',
    blackColor: '#212121',
    pinkColor: '#ff1876',
};
