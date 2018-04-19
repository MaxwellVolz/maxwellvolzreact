import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';



// import backgroundImage from '../../imgs/milledGrains.jpg';
import profilePic from '../../imgs/profile.png';

const styles = {
    headerGrid: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        textAlign: 'center',
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
        return (

            <MuiThemeProvider theme={theme}>
                <ScrollToTopOnMount />



                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                    <Grid item xs={12} style={styles.headerGrid} id="aboutHeader">
                        <img src={profilePic} id="profileIMG" />
                        {/* <Typography variant="display2">
                            Hello
                            </Typography> */}
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

                            <Typography variant="headline" gutterBottom>
                                {/* Volzbrew is dedicated to teaching an affordable way to brew at home. */}
                                Hello. My name is Max Volz.
                                <br />
                                <br />
                                I live in Walnut Creek, California.
                                <br />
                                <br />
                                I enjoy riding my bike with my girlfriend Molly, growing vegetables in our garden, and taking care of my four noisy chickens.
                                <br />
                                <br />
                                When I'm not doing those things, which is most of the time, I enjoy creating websites, applications, and graphics on my computer.
                                <br />
                                <br />
                                Thank you for checking out my site, I hope you find something you like.
                                <br />
                                <br />
                                Best,
                                <br />
                                Max
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            {/* <Link to="/"> */}
                            
                            <a href="https://www.linkedin.com/in/maxwellvolz">

                                <Button variant="raised">
                                    LinkedIn

                                </Button>
                            </a>
                            {/* </Link> */}

                        </Grid>
                    </Grid>

                </div>
            </MuiThemeProvider>

        );
    }
}
