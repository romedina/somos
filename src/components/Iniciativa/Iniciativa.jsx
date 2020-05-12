import React from 'react';
import { Grid, Box, Typography, ThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepperBase from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/ButtonBase';
import { iniciativaStyles } from '../../styles/styles';
import { typeCSBold, typeRockSalt } from '../../styles/typeTheme';
import { styled } from '@material-ui/core/styles'
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  ...iniciativaStyles
});

const BodyText = styled(Typography)({
  lineHeight: '1.8em',
  '@media screen and (max-width: 500px)': {
    fontSize: '1.2rem',
  }
})

const screenText = [
  'Construimos herramientas digitales para emprendedores, profesionistas y pymes con la finalidad de ayudarles a sostener sus ingresos y no depender de la venta presencial. Cada proyecto lo diseñamos a la medida de cada cliente y de acuerdo a sus capacidades y solvencia económica.',
  'Las contingencias globales se presentan inesperadamente y desestabilizan las economías personales, locales, nacionales e internacionales. Sólo apoyándonos todos juntos seremos capaces de salir adelante, generando empatía y consciencia colectiva mediante una cadena cíclica que va y viene por igual, donde todos somos eslabones fundamentales para sostener a nuestra comunidad.',
  'Todos los proyectos que creamos están respaldados por la experiencia y el conocimiento de 22 profesionales expertos cada uno en su campo de acción. Juntos dedicamos nuestros esfuerzos para aportar la mejor solución de acuerdo al reto particular que presentan nuestros clientes.'
]

const somosText = [
  ' DISEÑADORES ',
  ' CONTEXTO ',
  ' EXPERIENCIA '
]

export function Iniciativa() {

  const ButtonNext = styled(Button)({
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    top: 0,
    bottom: 0,
    margin: 'auto',
    height: '30px',
    width: '30px',
    boxSizing: 'border-box',
    right: '30px',
    background: 'rgba(0,0,0,0.12)',
    cursor: p => p.disabled ? '' : 'pointer',
    '& svg': {
      color: p => p.disabled ? 'gray!important' : 'black!important',
    },
    '@media (max-width:960px)': {
      top: 'auto',
      bottom: 'auto',
    },
  })
  
  const ButtonBack = styled(Button)({
    top: 0,
    bottom: 0,
    position: "absolute",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    margin: 'auto',
    height: '30px',
    width: '30px',
    boxSizing: 'border-box',
    left: '30px',
    background: 'rgba(0,0,0,0.12)',
    cursor: p => p.disabled ? '' : 'pointer',
    '& svg': {
      color: p => p.disabled ? 'gray!important' : 'black!important',
      marginLeft: '6px'
    },
    '@media (max-width:960px)': {
      top: 'auto',
      bottom: 'auto',
    },
  })

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const renderScreen = () => {
    switch (activeStep) {
      case 0:
        return (
          <React.Fragment>
            <Grid container justify='flex-end' alignItems='center'>
              <Grid item xs={12}>
                <Typography variant='h6'>{`0${activeStep + 1}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <ThemeProvider theme={typeCSBold}>
                  <Typography className={classes.blueType} variant='h4' display='inline'>som(</Typography>
                  <ThemeProvider theme={typeRockSalt}>
                    <CssBaseline />
                    <Typography paragraph className={classes.blueType} variant='subtitle1' display='inline'>{somosText[activeStep]}</Typography>
                  </ThemeProvider>
                  <Typography className={classes.blueType} variant='h4' display='inline'>)s</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box p={{md: 8, xs: 1}}>
                  <BodyText variant='h5'>{screenText[activeStep]}</BodyText>
                </Box>
              </Grid>
            </Grid>

          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            <Grid container justify='flex-end' alignItems='center'>
              <Grid item xs={12}>
                <Typography variant='h6'>{`0${activeStep + 1}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <ThemeProvider theme={typeCSBold}>
                  <Typography className={classes.blueType} variant='h4' display='inline'>som(</Typography>
                  <ThemeProvider theme={typeRockSalt}>
                    <CssBaseline />
                    <Typography className={classes.blueType} variant='subtitle1' display='inline'>{somosText[activeStep]}</Typography>
                  </ThemeProvider>
                  <Typography className={classes.blueType} variant='h4' display='inline'>)s</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box p={8}>
                  <Typography variant='h5'>{screenText[activeStep]}</Typography>
                </Box>
              </Grid>
            </Grid>
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <Grid container justify='flex-end' alignItems='center'>
              <Grid item xs={12}>
                <Typography variant='h6'>{`0${activeStep + 1}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <ThemeProvider theme={typeCSBold}>
                  <Typography className={classes.blueType} variant='h4' display='inline'>som(</Typography>
                  <ThemeProvider theme={typeRockSalt}>
                    <CssBaseline />
                    <Typography className={classes.blueType} variant='subtitle1' display='inline'>{somosText[activeStep]}</Typography>
                  </ThemeProvider>
                  <Typography className={classes.blueType} variant='h4' display='inline'>)s</Typography>
                </ThemeProvider>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box p={8}>
                  <Typography variant='h5'>{screenText[activeStep]}</Typography>
                </Box>
              </Grid>
            </Grid>
          </React.Fragment>
        )
      default:
        return (<span />)
    }
  }

  return (
    <div id='iniciativa' style={{position: 'relative'}}>
      <Box pt={{xs: 8}} pb={{xs: 8}}>
        <Grid container style={{ height: '100%' }} justify='center' alignItems='center'>
          <Grid item xs={12}>
            <GridStyled style={{ height: '100%' }} container justify='center' alignItems='center'>
              <Grid item xs={11} md={8} lg={6}>
                {renderScreen()}
              </Grid>
            </GridStyled>
          </Grid>
          <Grid item xs={12}>
            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={activeStep}
              className={classes.root}
            />
            <ButtonBack size="small" onClick={handleBack} disabled={activeStep === 0}>
              <ArrowBackIos />
            </ButtonBack>
            <ButtonNext size="small" onClick={handleNext} disabled={activeStep === screenText.length - 1}>
              <ArrowForwardIos />
            </ButtonNext>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}




const MobileStepper = styled(MobileStepperBase)({
  position: 'absolute',
  left: 0, 
  right: 0,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center'
})

const GridStyled = styled(Grid)({
  minHeight: '390px'
})