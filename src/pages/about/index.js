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
                            About
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
                                The Volz bros have proven:
                                <br />
                                <br />
                                <em><u>YOU</u> CAN BREW AMAZING BEER!!!</em>
                                <br />
                                <br />
                                Honestly, the beer you brew can rival and surpass just about anything found in stores. We’re just regular guys who make delicious BEER. We want to share our unique experiences and home brewing tips to help YOU create your very own delicious, home brewed BEER!
                                <br />
                                <br />
                                Our first attempts were huge successes thanks to the advice and support from two of our Uncles (30+ years brewing experience) and we haven’t stopped brewing since. 
                                <br />
                                <br />
                                Our methods are best for anyone interested in brewing beer at home. If you’re looking to get started, or have previous brewing experience, we can guide you to continued success: <b>lots and lots of great home brew!</b>
                                <br />
                                <br />
                                Once we decided we were going to brew we quickly learned that finding good information online is surprisingly very difficult: The information is disorganized and the best tips are often found deeply buried in forums. In many cases advice proved contradictory, which lead to even more questions.
                                <br />
                                <br />
                                We created this site to provide the most important information, the things we really wanted and needed to know when we were just starting out, organized conveniently in one location.
                                <br />
                                <br />
                                We hope you’ll enjoy this great hobby as much as we do and share our passion.
                                <br />
                                <br />
                                Don't worry, brewing beer is simple and quite forgiving...as long as you are diligent with sanitization! 
                                <br />
                                <br />
                                Cheers!
                                <br />
                                <br />
                                Joe Volz, Kevin Volz, and Max Volz
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
