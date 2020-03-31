import * as ColorSystem from './colorSystem';

export const landingStyles = {
    circularLogo: {
        width: 80,
        height: 80,
        position: 'relative',
        left: '50%',
    },
    downArrow: {
        width: 35,
        height: 35,
        position: 'relative',
        left: '50%',
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

export const professionals = {
    '@keyframes fadeInGardener': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    gardener_bg: {
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fjardinera.jpeg?alt=media&token=ae5f6d72-fdaa-4cba-b5ea-e13d00efcd64')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animationName: '$fadeInGardener',
        animationDuration: '2s'
          
    },
    '@keyframes fadeInDoctor': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    doctor_bg:{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fdoctor.jpeg?alt=media&token=03e0b371-de75-4b66-9413-a2d90f8c30da')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animationName: '$fadeInDoctor',
        animationDuration: '2s'
    },
    '@keyframes fadeInEntrepreneur': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    entrepreneur_bg:{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fchef.jpeg?alt=media&token=1512d9fa-289e-4435-b3c6-0ac78cdba4d4')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animationName: '$fadeInEntrepreneur',
        animationDuration: '2s'
    },
    '@keyframes fadeInSales': {
        from: {opacity: 0},
        to: {opacity: 1}
    },
    sales_bg:{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/somos-7dc78.appspot.com/o/Backgrounds%2Fcosturera.jpeg?alt=media&token=033f3c54-2a11-4c07-8a96-99aad8a8c2e8')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animationName: '$fadeInSales',
        animationDuration: '2s'
    },
    whiteFont: {
        color: ColorSystem.white
    },
    blueContainer:{
        backgroundColor: ColorSystem.regularBlue
    }

}