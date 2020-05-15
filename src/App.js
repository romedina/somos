import React from 'react';
import ReactGA from 'react-ga'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { typeCSBook } from './styles/typeTheme'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

// pages
import Home from './pages/home'

// google analitycs
ReactGA.initialize('UA-162708338-1')
ReactGA.pageview(window.location.pathname)

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={typeCSBook}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route component={Home} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
