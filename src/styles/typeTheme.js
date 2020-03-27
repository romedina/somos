import { createMuiTheme } from '@material-ui/core/styles';

import CircularStdBookEot from '../fonts/CircularStdBook.eot';
import CircularStdBookSvg from '../fonts/CircularStdBook.svg';
import CircularStdBookTtf from '../fonts/CircularStdBook.ttf';
import CircularStdBookWoff from '../fonts/CircularStdBook.woff';
import CircularStdBookWoff2 from '../fonts/CircularStdBook.woff2';

import CircularStdBoldEot from '../fonts/CircularStdBold.eot';
import CircularStdBoldSvg from '../fonts/CircularStdBold.svg';
import CircularStdBoldTtf from '../fonts/CircularStdBold.ttf';
import CircularStdBoldWoff from '../fonts/CircularStdBold.woff';
import CircularStdBoldWoff2 from '../fonts/CircularStdBold.woff2';

import RockSaltEot from '../fonts/RockSalt.eot';
import RockSaltSvg from '../fonts/RockSalt.svg';
import RockSaltTtf from '../fonts/RockSalt.ttf';
import RockSaltWoff from '../fonts/RockSalt.woff';
import RockSaltWoff2 from '../fonts/RockSalt.woff2';

const circularStdBook = {
    fontFamily: 'CircularStdBook',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('CircularStdBook'),
        url(${CircularStdBookEot}) format('embedded-opentype'),
        url(${CircularStdBookWoff2}) format('woff2'),
        url(${CircularStdBookWoff}) format('woff'),
        url(${CircularStdBookTtf}) format('truetype'),
        url(${CircularStdBookSvg}) format('svg')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const circularStdBold = {
    fontFamily: 'CircularStdBold',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('CircularStdBold'),
        url(${CircularStdBoldEot}) format('embedded-opentype'),
        url(${CircularStdBoldWoff2}) format('woff2'),
        url(${CircularStdBoldWoff}) format('woff'),
        url(${CircularStdBoldTtf}) format('truetype'),
        url(${CircularStdBoldSvg}) format('svg')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const rockSalt = {
    fontFamily: 'RockSalt',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('RockSalt'),
        url(${RockSaltEot}) format('embedded-opentype'),
        url(${RockSaltWoff2}) format('woff2'),
        url(${RockSaltWoff}) format('woff'),
        url(${RockSaltTtf}) format('truetype'),
        url(${RockSaltSvg}) format('svg')
    `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const typeCSBook = createMuiTheme({
    typography: {
        fontFamily: 'CircularStdBook'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [circularStdBook],
            },
        },
    },
})

export const typeCSBold = createMuiTheme({
    typography: {
        fontFamily: 'CircularStdBold'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [circularStdBold],
            },
        },
    },
})

export const typeRockSalt = createMuiTheme({
    typography: {
        fontFamily: 'RockSalt'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [rockSalt],
            },
        },
    },
})