import * as ColorSystem from './colorSystem';

export const landingStyles = {
    '@keyframes loop': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(359deg)' }
    },
    circularLogo: {
        width: 80,
        height: 80,
        position: 'relative',
        left: '50%',
        animation: '$loop 7s infinite',

    },
    '@keyframes topDown': {
        from: {
            transform: 'translateY(-25px)',
            opacity: 0
        },
        to: {
            transform: 'translateY(10px)',
            opacity: 100
        },
    },
    downArrow: {
        width: 50,
        height: 50,
        position: 'relative',
        left: '50%',
        animation: '$topDown 1s infinite',
    },
    mainContainer: {
        backgroundColor: ColorSystem.regularBlue
    },
    whatsappIcon: {
        width: 30,
        height: 30,
        position: 'relative',
        left: '80%',
    },
    whiteBtn: {
        color: ColorSystem.white,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: ColorSystem.white
    },
    whiteFont: {
        color: ColorSystem.white
    },
}

export const professionals = theme => ({
    '@keyframes fadeInGardener': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    gardener_bg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fjardinera.jpeg?alt=media&token=ae5f6d72-fdaa-4cba-b5ea-e13d00efcd64')`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundColor:ColorSystem.extraLightBlue,
            height: '55vh'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        },
        
        animationName: '$fadeInGardener',
        animationDuration: '2s',

    },
    '@keyframes fadeInDoctor': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    doctor_bg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fdoctor.jpeg?alt=media&token=03e0b371-de75-4b66-9413-a2d90f8c30da')`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundColor:ColorSystem.extraLightBlue,
            height: '55vh'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        },
        backgroundPosition: 'center',
        animationName: '$fadeInDoctor',
        animationDuration: '2s'
    },
    '@keyframes fadeInEntrepreneur': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    entrepreneur_bg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fchef.jpeg?alt=media&token=1512d9fa-289e-4435-b3c6-0ac78cdba4d4')`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundColor:ColorSystem.extraLightBlue,
            height: '55vh'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        },
        backgroundPosition: 'center',
        animationName: '$fadeInEntrepreneur',
        animationDuration: '2s'
    },
    '@keyframes fadeInSales': {
        from: { opacity: 0 },
        to: { opacity: 1 }
    },
    sales_bg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fcosturera.jpeg?alt=media&token=033f3c54-2a11-4c07-8a96-99aad8a8c2e8')`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundColor:ColorSystem.extraLightBlue,
            height: '55vh'
        },
        [theme.breakpoints.up('lg')]: {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        },
        backgroundPosition: 'center',
        animationName: '$fadeInSales',
        animationDuration: '2s'
    },
    whiteFont: {
        color: ColorSystem.white
    },
    blueContainer: {
        backgroundColor: ColorSystem.regularBlue
    }
})

export const teamStyles = {
    mainContainer: {
        backgroundColor: ColorSystem.extraLightBlue
    },
    divider: {
        borderTop: `2px solid ${ColorSystem.regularBlue}`
    },
    tlBg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Ftipos.jpg?alt=media&token=7a1ab2c1-e88d-41b1-8706-581bc711f530')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        height: 400,
        backgroundColor: 'black'
    },
    imgStd: {
        minHeight: 40,
        maxHeight: 70
    },
    ardBg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fard.jpg?alt=media&token=2af9dcac-ebcd-4626-b882-e7370534130a')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '100%',
        height: 400,
        backgroundColor: 'black'
    },
    h4Title: {
        color: ColorSystem.regularBlue,
    }
}

export const bulletsStyle = {
    title: {
        color: ColorSystem.regularBlue
    }
}

export const benefitsStyles = {
    mainContainer: {
        backgroundColor: ColorSystem.regularBlue
    },
    whiteType: {
        color: ColorSystem.white
    }
}

export const footerStyles = {
    mainContainer: {
        backgroundColor: ColorSystem.black
    },
    whiteType: {
        color: ColorSystem.white
    },
}

export const iniciativaStyles = {
    blueType: {
        color: ColorSystem.regularBlue
    }
}