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
        margin: 'auto',
        display: 'block',
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
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fjardinera.jpg?alt=media&token=140181c0-c5a2-4c9a-8013-2fe6cec1dc6e')`,
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
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fdoctor.jpg?alt=media&token=df8cf862-365e-4292-8531-5a4e16a7f12c')`,
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
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fchef.jpg?alt=media&token=bbe2197e-f410-451a-9de4-245103e11115')`,
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
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fcosturera.jpg?alt=media&token=b31446d7-db1e-4434-a694-7fd3bf1de7a7')`,
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
    blueType:{
        color: ColorSystem.regularBlue
    },
    link:{
        textDecoration:'none',
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