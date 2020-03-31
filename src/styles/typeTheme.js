import { createMuiTheme } from '@material-ui/core';

import CircularStdBookEot from '../fonts/CircularStdBook.eot';
import CircularStdBookTtf from '../fonts/CircularStdBook.ttf';
import CircularStdBookWoff from '../fonts/CircularStdBook.woff';
import CircularStdBookWoff2 from '../fonts/CircularStdBook.woff2';
import CircularStdBookSvg from '../fonts/CircularStdBook.svg';

import CircularStdBoldEot from '../fonts/CircularStdBold.eot';
import CircularStdBoldTtf from '../fonts/CircularStdBold.ttf';
import CircularStdBoldWoff from '../fonts/CircularStdBold.woff';
import CircularStdBoldWoff2 from '../fonts/CircularStdBold.woff2';
import CircularStdBoldSvg from '../fonts/CircularStdBold.svg';

import RockSaltEot from '../fonts/RockSalt.eot';
import RockSaltTtf from '../fonts/RockSalt.ttf';
import RockSaltWoff from '../fonts/RockSalt.woff';
import RockSaltWoff2 from '../fonts/RockSalt.woff2';
import RockSaltSvg from '../fonts/RockSalt.svg';

import * as ColorSystem from './colorSystem';

const CircularStdBook = {
    fontFamily: 'CircularStdBook',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${CircularStdBookEot}) format('embedded-opentype'),
         url(${CircularStdBookWoff2}) format('woff2'),
         url(${CircularStdBookWoff}) format('woff'),
         url(${CircularStdBookTtf}) format('truetype'),
         url(${CircularStdBookSvg}) format('svg')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const CircularStdBold = {
    fontFamily: 'CircularStdBold',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${CircularStdBoldEot}) format('embedded-opentype'),
         url(${CircularStdBoldWoff2}) format('woff2'),
         url(${CircularStdBoldWoff}) format('woff'),
         url(${CircularStdBoldTtf}) format('truetype'),
         url(${CircularStdBoldSvg}) format('svg')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
const RockSalt = {
    fontFamily: 'RockSalt',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `url(${RockSaltEot}) format('embedded-opentype'),
         url(${RockSaltWoff2}) format('woff2'),
         url(${RockSaltWoff}) format('woff'),
         url(${RockSaltTtf}) format('truetype'),
         url(${RockSaltSvg}) format('svg')`,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const typeCSBook = createMuiTheme({
    typography: {
        fontFamily: 'CircularStdBook, Arial',
        color: ColorSystem.lightBlack
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [CircularStdBook],
            },
        },
    },
});

export const typeCSBold = createMuiTheme({
    typography: {
        fontFamily: 'CircularStdBold, Arial',
        color: ColorSystem.lightBlack
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [CircularStdBold],
            },
        },
    },
});

export const typeRockSalt = createMuiTheme({
    typography: {
        fontFamily: 'RockSalt, Arial',
        color: ColorSystem.lightBlack
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [RockSalt],
            },
        },
    },
});

