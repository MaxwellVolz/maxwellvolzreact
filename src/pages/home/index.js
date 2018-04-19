import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import 'typeface-roboto';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';



import ReactiveSVG from '../../components/ReactiveSVG';
import ClusterGraph from '../../components/ClusterGraph';

import MyProcessAccordion from '../../components/MyProcessAccordion';

import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';


// import bikerSVG from '../../imgs/svgs/cruising.svg';

import biker from '../../imgs/svgs/cruising.svg';
import brewProcessAnim from '../../imgs/svgs/brewProcessAnim.svg';
import blokDodge from '../../imgs/blokDodge3.png';
import hackerRank from '../../imgs/hackerRank.png';


const styles = {
    headerGrid: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        // marginTop: '120px',
        height: '660px'
    },
    mainHeaderText: {
        textAlign: 'center',
        color: 'white'
    },

    logoSVG: {
        width: '100%',
        maxWidth: '637px'
    },
    headerText: {
        textAlign: 'center',

        color: 'white'
    },
    contentWrapSkinny: {
        width: '60vw',
        margin: '0 auto',
        maxWidth: '100vw',
        minWidth: '320px',
        padding: 24,
    },
    paper: {
        // height: 140,
        // width: 100,
        // padding:14,

    },
    paperNumber: {
        width: '15%',
        color: '#a4c7e4',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '700',
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    paperText: {
        width: '85%',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '700',
        display: 'table-cell',
        padding: '12px',
        verticalAlign: 'middle'
    },
    card: {
        maxWidth: 345,
        margin: 'auto'
    },
    cardImg1: {
        // backgroundImage: `url(${mash})`,
        backgroundSize: 'contain',

        height: 200,
    },
    cardImg2: {
        // backgroundImage: `url(${brewpot})`,
        backgroundSize: 'cover',
        height: 116,
    },
    cardImg3: {
        // backgroundImage: `url(${brewbros})`,
        height: 200,
    },
    bikerSVG: {
        position: 'absolute',
        height: '300px',
        top: '362px'
    }



};


export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <MuiThemeProvider theme={theme}>

                <ScrollToTopOnMount/>
                <ReactiveSVG />
            


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>



                    <Grid item xs={12} style={styles.headerGrid} className="headerGrid">


                        <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 0, paddingTop: 230, }}>

                            <Grid item xs={10} md={8}>
                                <Link to="/brew">
                                    <Typography variant="display2" component="h2" style={{ color: 'white' }}>
                                        Experienced web developer.
                                    </Typography>

                                </Link>
                            </Grid>

                            <div style={{ overflowX: 'hidden', zIndex: '1000' }}>
                            <img src={biker} className="bikerSVG" style={styles.bikerSVG} alt="biker" />
                            </div>

                            {/* <Grid item xs={5} md={4} style={{ color: 'white', textAlign: 'right' }}>
                                <Typography variant="display2" component="h2" style={{ color: 'white', textDecoration: 'underline', marginBottom: '8px' }}>
                                    New Articles
                                </Typography>
                                <Link to="/brew">
                                    <Typography variant="headline" component="h2" style={{ color: 'white' }}>
                                        How to Brew
                                    </Typography>
                                </Link>
                                <Link to="/brew">
                                    <Typography variant="headline" component="h2" style={{ color: 'white' }}>
                                        Equipment
                                    </Typography>
                                </Link>
                            </Grid> */}

                        </Grid>
                        {/* <Typography variant="display2" style={styles.mainHeaderText}>Volzbrew</Typography> */}


                        {/* <Typography variant="subheading" style={styles.headerText}>
                        Making good beer cheap
                            </Typography> */}
                    </Grid>

                </Grid>

                {/* <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Button variant="raised" >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </div> */}


                <div className="contentWrap">


                    <Typography variant="display2" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign: 'center' }}>
                        Check out some of my recent work
                    </Typography>

                </div>
                {/* <div className="colorWrap">
                
                    <div className="contentWrap">

                        <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>

                            <Grid item xs={12} style={{ marginTop: 20, marginBottom: 40 }}>

                                <Typography variant="headline">
                                    
                                    <br /><br />
                                </Typography>

                            </Grid>
                        </Grid>
                    </div>
                {/* </div> */}
                <div className="headerGrid">

                    <div className="contentWrap">

                        <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40, marginBottom: 40 }}>

                            <Grid item xs={12} md={4}>
                                <div>
                                    <Card style={styles.card}>
                                        <CardMedia
                                            style={styles.cardImg1}
                                            title="Homebrewing Basics"
                                            image={brewProcessAnim}

                                        // src=
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                Volzbrew.com
                                        </Typography>
                                            <Typography component="p">
                                                Volzbrew is a work in progress website that showcases the advantages and technique behind brewing in a bag. The knowledge of brewing and process is provided by my brothers Kevin and Joe.
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Link to="http://volzbrew.com"> */}
                                            {/* <a href="http://volzbrew.com"> */}

                                                <Button size="small" color="primary">
                                                    Coming Very Soon!
                                            </Button>
                                            {/* </a> */}
                                            {/* </Link> */}
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <div>
                                    <Card style={styles.card}>
                                        <CardMedia
                                            style={styles.cardImg2}
                                            title="Equipment"
                                            src="placeholderSRC"
                                            image={blokDodge}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                Blokdodge
                                        </Typography>
                                            <Typography component="p">
                                                BLOKDODGE is a fast-paced block simulator based in a fantastic world of geometry. Are you edgy enough? Do you get the point?<br /><br />
                                                85% Positive Ratings on Steam
                                    </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                                            <a href="http://store.steampowered.com/app/683670/BLOKDODGE/">



                                                <Button size="small" color="primary">
                                                    VIEW ON STEAM
                                                </Button>

                                            </a>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>



                            <Grid item xs={12} md={4}>
                                <div>
                                    <Card style={styles.card}>
                                        <CardMedia
                                            style={styles.cardImg3}
                                            title="$$"
                                            src="placeholderSRC"
                                            image={hackerRank}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                HackerRank
                                        </Typography>
                                            <Typography component="p">
                                                Check out some of my solutions to HackerRank algorithms using <b>JavaScript</b>. Plus a tutorial for setting up your own local development server with <b>Node</b> and <b>Gulp</b>!
                                                {/* As usual I do a breakdown of the technologies used for creating my personal website; <b>ReactJS, Webpack, MaterialUI, AWS, Node, and more!</b> */}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <a href="/hackerRank">
                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </a>
                                            <a href="https://github.com/MaxwellVolz/hackerranklocal">
                                                <Button size="small" color="primary">
                                                    Git
                                                </Button>
                                            </a>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </div>


                <div className="contentWrap">


                    <Typography variant="display2" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign: 'center' }}>
                        Technologies I Use
                        </Typography>

                    {/* <ForceGalaxy /> */}

                    {/* <BarChart data={[5,10,1,3]} size={[500,500]} /> */}
                </div>

                <div className="colorWrap">
                    <ClusterGraph />
                </div>

                <div className="contentWrap">


                    <Typography variant="display3" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign: 'center' }}>
                        My Current Process
                        </Typography>

                </div>
                <div className="colorWrap">
                    <div className="contentWrap">
                        <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 40, marginBottom: 40 }}>

                            <Grid item xs={12} md={8}>

                                <MyProcessAccordion />

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className="contentWrap">


                    <Typography variant="display3" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign: 'center' }}>
                        You came, you saw. Thank you.
                    </Typography>

                    {/* <ForceGalaxy /> */}

                    {/* <BarChart data={[5,10,1,3]} size={[500,500]} /> */}
                </div>


            </MuiThemeProvider>

        );
    }
}
