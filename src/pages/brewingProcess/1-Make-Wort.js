import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent, Component } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import List, { ListItem, ListItemText } from 'material-ui/List';

import VolzbrewAppBar from '../../components/VolzbrewAppBar';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
import ArticleNavigation from '../../components/ArticleNavigation';
import BreadCrumbs from '../../components/BreadCrumbs';


import backgroundImage from '../../imgs/milledGrains.jpg';

import water from '../../imgs/water.svg';
import hops from '../../imgs/hop.svg';
import grain from '../../imgs/grain2.svg';
import yeast from '../../imgs/yeast3.svg';
import beer from '../../imgs/beer.svg';


// const Water = require('../../imgs/water.svg');


const styles = {
    headerGrid: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '340px'
    },
    mainHeaderText: {
        paddingTop: '140px',
        textAlign: 'center',
        color: 'white'
    },
    headerText: {
        textAlign: 'center',
        color: 'white',
        maxWidth: '400px',
        margin: '0 auto'
    },
    contentWrap: {
        width: '80vw',
        margin: '0 auto',
        maxWidth: '100vw',
        padding: '24',

    },

};


export default class Header extends PureComponent<PropType> {
    
    render() {
        let breadCrumbs = [
            {
                name: 'Volzbrew',
                url: '/',
            },
            {
                name: 'Brew',
                url: '/brew',
            },
            {
                name: 'Beginner',
                url: '/brew',
            },
            {
                name: 'Brewing Process',
                url: '/brewingProcess',
            }
        ]
        var navOptions = [
            {
                name: 'Overview',
                url: '/brewingProcess'
            }, {
                name: '1. Make Wort',
                url: '/brewingProcess/1-Make-Wort',
                isActive: true
            },
            {
                name: '2. The Boil',
                url: '/brewingProcess/2-The-Boil',
            },
            {
                name: '3. Cooling the Wort and Pitching the Yeast',
                url: '/brewingProcess/3-Cool-Wort',
            },
            {
                name: '4. Fermentation',
                url: '/brewingProcess/4-Fermentation',
            },
            {
                name: '5. Carbonation',
                url: '/brewingProcess/5-Carbonation',
            },
        ];
        
        return (

            <MuiThemeProvider theme={theme}>
            <ScrollToTopOnMount/>
            
                <div className="contentWrap100">
                    <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>

                       <Grid item xs={12} style={{ marginLeft:'12px',height: '100%' }}>
                       <Typography variant="body2">
                                <BreadCrumbs breadCrumbs={breadCrumbs}/>
                            </Typography>
                            <Typography variant="display2">Brewing Process</Typography>             
                        </Grid>
                        <Grid item xs={4} md={2} lg={2} style={{ backgroundColor: 'white', height: '100%', padding: 0 }}>
                                                    
                            <ArticleNavigation navOptions={navOptions}/>

                        </Grid>

                        <Grid item xs={8} md={4} lg={4} >
                            <Typography variant="display1" gutterBottom>Step 1: Make Wort</Typography>
                            <Typography variant="subheading" gutterBottom>

                                        <b>Wort</b> is unfermented beer - a mixture of water and sugar that’s been extracted from grains which ultimately serves as food for the yeast to consume and create <b>alcohol</b>.
                                <br />
                                        <br />
                                        Homebrewers typically make wort in one of two ways: combining <b>malt</b> extract with water, or steeping milled grains to extract their sugars (sort of like making tea).
                                <br />
                                        <br />
                                        <b><i>Extract Brewing</i></b>: Add liquid or dry malt extract to heated water
                                        <br />
                                        <b><i>All Grain Brewing</i></b>: Add crushed (milled), malted grains to water, heated to ~155 degrees and left to , to
                                        activate enzymes in the grain which help convert the starch in the grain into simple sugars for the yeast to eat.
                            </Typography>
                        </Grid>
                        <Grid item xs={8} md={6} lg={6} >
                            <img src={beer} className="svgIcon" alt="beer" />
                        </Grid>
                    </Grid>
                    </div>

                    {/* <div className="contentWrapFullWidth">
                        <Typography variant="display1" gutterBottom >
                            Step 1: Make Wort
                        </Typography>
                    </div> */}
                    <div style={styles.contentWrap}>

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                            <Grid item xs={12}>

                                <Typography variant="subheading" gutterBottom>
                                    
                        </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={styles.contentWrap}>

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Link to="/brewingProcess/2-The-Boil">

                                    <Button variant="raised">
                                        Step 2: The Boil
    
                            </Button>
                                </Link>

                            </Grid>
                        </Grid>


                    </div>
                    
            </MuiThemeProvider>

        );
    }
}
