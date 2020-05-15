import React, { useState } from 'react';
import { Grid, Box, Button, makeStyles, ThemeProvider, CssBaseline, Hidden } from '@material-ui/core';
import CircularLogo from '../../assets/circularLogo.svg';
import { typeCSBold } from '../../styles/typeTheme';
import { landingStyles } from '../../styles/styles';
import { Link } from 'react-scroll';
import { ContactModal } from '../ContactModal/contactModal';
import styled from 'styled-components'

const useStyles = makeStyles(landingStyles)

export function Header() {

  const classes = useStyles();
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleOpen = () => {
    setIsContactVisible(true);
  }

  const handleClose = () => {
    setIsContactVisible(false)
  }

  return (
    <Content container justify='flex-start' alignItems='center'>
      <ThemeProvider theme={typeCSBold}>
        <CssBaseline />
        <Grid item xs={6} lg={3} xl={4}>
          <img className={classes.circularLogo} src={CircularLogo} alt='logo' />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={4} lg={5} xl={4}>
            <Box p={5}>
              <Grid container justify='center' alignItems='center'>
                <Grid item xs md>
                  <Link
                    activeClass='active'
                    to='iniciativa'
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <Button className={classes.whiteFont}>Iniciativa</Button>
                  </Link>
                </Grid>
                <Grid item xs md>
                  <Link
                    activeClass='active'
                    to='somos'
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <Button className={classes.whiteFont}>Somos</Button>
                  </Link>
                </Grid>
                <Grid item xs md>
                  <Link
                    activeClass='active'
                    to='tuProyecto'
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <Button className={classes.whiteFont}>Tu Proyecto</Button>
                  </Link>
                </Grid>
                <Grid item xs md>
                  <Link
                    activeClass='active'
                    to='beneficios'
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <Button className={classes.whiteFont}>Beneficios</Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Hidden>
        <Grid item xs={6} lg={4} xl={4}>
          <Grid container justify='flex-end' alignItems='center'>
            <Grid item xs={12}>
              <Box p={5}>
                <Button onClick={handleOpen} className={classes.whiteBtn} variant='outlined' size='large'>Contacto</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <ContactModal open={isContactVisible} handleClose={handleClose} />
      </ThemeProvider>
    </Content>
  )
}

const Content = styled(Grid)`
  background: var(--blue)
`

export default Header
