import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


import VolzbrewAppBar from '../../components/VolzbrewAppBar';

import backgroundImage from '../../imgs/milledGrains.jpg';

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
        maxWidth:'400px',
        margin:'0 auto'
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
        return (

            <MuiThemeProvider theme={theme}>


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                    <Grid item xs={12} style={styles.headerGrid}>
                        <Typography variant="display2" style={styles.mainHeaderText}>
                            Brew Beer
                            </Typography>
                        {/* <Typography variant="headline" style={styles.headerText}>
                        Volzbrew is dedicated to teaching an affordable way to brew at home.
                            </Typography> */}
                        {/* <Typography variant="subheading" style={styles.headerText}>
                        Making good beer cheap
                            </Typography> */}
                    </Grid>

                </Grid>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 40 }}>
                        <Grid item xs={12}>

                            <Typography variant="subheading" gutterBottom>
                                {/* Volzbrew is dedicated to teaching an affordable way to brew at home. */}
                                
                                Start Here:
                                <br /><br />
                                What You Need to Know...
                                <br />
                                Brewing Equipment
                                <br />
                                First Brew Day
                                <br />
                                Beginner Recipes
                                <br />
                                Things to Consider...
                                <br />
                                <br />
                                
                                
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Link to="/brewingProcess">

                                <Button variant="raised">
                                    The Brewing Process

                                </Button>
                            </Link>

                        </Grid>
                    </Grid>

                </div>
            </MuiThemeProvider>

        );
    }
}
