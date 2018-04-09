import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import 'typeface-roboto';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import HomePage from './pages/home/';
import AboutPage from './pages/about/';
import BrewingProcessPage from './pages/brewingProcess/';
import BrewingProcessPage1 from './pages/brewingProcess/1-Make-Wort';
import BrewingProcessPage2 from './pages/brewingProcess/2-The-Boil';
import BrewingProcessPage3 from './pages/brewingProcess/3-Cool-Wort';
import BrewingProcessPage4 from './pages/brewingProcess/4-Fermentation';
import BrewingProcessPage5 from './pages/brewingProcess/5-Carbonation';

import BrewPage from './pages/brew/';

import MaxwellVolzAppBar from './components/MaxwellVolzAppBar';

// import backgroundImage from './imgs/milledGrains.jpg';

const styles = {
    headerGrid: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '680px'
    },
    mainHeaderText: {
        paddingTop: '260px',
        textAlign: 'center',
        color: 'white'
    },
    headerText: {
        textAlign: 'center',
        color: 'white'
    },
    contentWrap: {
        width: '80vw',
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '24',
    },
    appBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 17
    },
    content:{
        width: '100%'
    }

};

const Home = () => ( <HomePage /> )

const About = () => ( <AboutPage /> )

const Blog = () => (
    <div>
        <h2>Blog</h2>
    </div>
)

const BrewingProcess = () => ( <BrewingProcessPage /> )
const BrewingProcess1 = () => ( <BrewingProcessPage1 /> )
const BrewingProcess2 = () => ( <BrewingProcessPage2 /> )
const BrewingProcess3 = () => ( <BrewingProcessPage3 /> )
const BrewingProcess4 = () => ( <BrewingProcessPage4 /> )
const BrewingProcess5 = () => ( <BrewingProcessPage5 /> )

const Brew = () => ( <BrewPage /> )

export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <Router onUpdate={() => window.scrollTo(0, 0)} >

                <div>
                    <MaxwellVolzAppBar />

                    <div style={styles.content}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/blog" component={Blog} />
                        <Route exact path="/brewingProcess" component={BrewingProcess} />
                        <Route path="/brewingProcess/1-Make-Wort" component={BrewingProcess1} />
                        <Route path="/brewingProcess/2-The-Boil" component={BrewingProcess2} />
                        <Route path="/brewingProcess/3-Cool-Wort" component={BrewingProcess3} />
                        <Route path="/brewingProcess/4-Fermentation" component={BrewingProcess4} />
                        <Route path="/brewingProcess/5-Carbonation" component={BrewingProcess5} />

                        <Route path="/brew" component={Brew} />

                    </div>
                </div>
            </Router>
        );
    }
}
