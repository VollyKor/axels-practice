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
