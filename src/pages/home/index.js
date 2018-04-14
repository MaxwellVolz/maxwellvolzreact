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

import BarChart from '../../components/BarChart';

// import bikerSVG from '../../imgs/svgs/cruising.svg';

import biker from '../../imgs/svgs/cruising.svg';

const styles = {
    headerGrid: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
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
        height: 200,
    },
    cardImg2: {
        // backgroundImage: `url(${brewpot})`,
        height: 200,
    },
    cardImg3: {
        // backgroundImage: `url(${brewbros})`,
        height: 200,
    },
    bikerSVG:{
        position: 'absolute',
        height: '300px',
        top: '362px'
    }



};


export default class Header extends PureComponent<PropType> {
    render() {
        return (

            <MuiThemeProvider theme={theme}>


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>



                    <Grid item xs={12} style={styles.headerGrid} className="headerGrid">


                        <Grid container spacing={24} justify="center" style={{ flexGrow: '1', marginTop: 0, paddingTop: 230, }}>
                            
                            <Grid item xs={10} md={8}>
                                <Link to="/brew">
                                    <Typography variant="display3" component="h2" style={{ color: 'white' }}>
                                       Experienced web developer.
                                    </Typography>
                                    
                                </Link>
                            </Grid>
                            <img src={biker} className="bikerSVG" style={styles.bikerSVG} alt="biker" />
                            
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


                    <Typography variant="display3" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign:'center' }}>
                       Check out some of my recent work.
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
                                            src="placeholderSRC"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                Volzbrew.com
                                        </Typography>
                                            <Typography component="p">
                                            Volzbrew is a website I built using <b>ReactJS</b> and <b>MaterialUI</b>. The knowledge of brewing and process is provided by my brothers Kevin and Joe.
                                        </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Check it out
                                            </Button>
                                            
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
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                Blokdodge
                                        </Typography>
                                            <Typography component="p">
                                                BLOKDODGE is a fast-paced block simulator based in a fantastic world of geometry. Are you edgy enough? Do you get the point? 
                                    </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Button size="small" color="primary">
                                                Learn More
                                            </Button> */}
                                            <Button size="small" color="primary">
                                                VIEW ON STEAM
                                            </Button>
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
                                            <Link to="/hackerRank">
                                                <Button size="small" color="primary">
                                                    Learn More
                                                </Button>
                                            </Link>
                                            <Link to="https://github.com/MaxwellVolz/hackerranklocal">
                                                <Button size="small" color="primary">
                                                    Git
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                    </div>

                    <div className="contentWrap">


                        <Typography variant="display3" component="h2" style={{ marginTop: 40, marginBottom: 40, textAlign:'center' }}>
                            I am currently looking for a new developer role in the Bay Area.
                        </Typography>

                                    <BarChart data={[5,10,1,3]} size={[500,500]} />
                        

                    </div>

                    <div className="colorWrap">


                        <div className="contentWrap">

                            <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                                <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                    <Link to="/brewingProcess">

                                        <Button variant="raised">
                                            Start Here
        
                                    </Button>
                                    </Link>

                                </Grid>
                            </Grid>
                        </div>

                    </div>

                    <div className="contentWrap">
                        <Grid container spacing={8} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>1</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            The Process
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>

                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>2</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            Brewing Equipment
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>

                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>3</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            Costs of Brewing
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>4</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            Sanitation Guide
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>5</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            Yeast Starter
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <Paper style={styles.paper}>
                                    <Link to="/brewingProcess" style={{ display: 'table', width: '100%' }} className={'processHover'}>
                                        <span style={styles.paperNumber}>6</span>
                                        <Typography variant="display3" style={styles.paperText}>
                                            Clarification Class
                                    </Typography>
                                    </Link>
                                </Paper>
                            </Grid>

                        </Grid>
                    </div>

                    <div className="contentWrap">
                        <Grid container spacing={40} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                    FAQ
                            </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="title" gutterBottom>
                                    Who We Are
                        </Typography>
                                <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                    We're just regular guys who make delicious BEER. Our first attempts were huge successes thanks to the tips and support from our Uncles (30+ years of brewing experience) and we want to share what we know.
                        </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="title" gutterBottom>
                                    What We Do
                        </Typography>
                                <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                    We make homebrew for ourselves and to share with friends and family. Some of our biggest endeavours include catering beer for a wedding with nearly 200 guests!
                        </Typography>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="contentWrap">


                        <Grid container spacing={40} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>

                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                    Display1
                            </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography variant="title" gutterBottom>
                                    Home Brewing: The Basics
                            </Typography>
                                <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                    An intro to all things home brew. From small single batches to brewing for a wedding. We cover the basics so you can get up to speed in no time!
                            </Typography>
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Button variant="raised" style={{ margin: '20px 0', textAlign: 'center' }}>
                                        First brew day
                            </Button>
                                </div>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="title" gutterBottom>
                                    Cost of Home Brewing
                            </Typography>
                                <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                    How much does home brewing cost? Is home brewing worth it? How can I save money? We answer these questions and more in this detailed blog post.
    
                            </Typography>
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <Button variant="raised" style={{ margin: '20px 0' }}>
                                        What you need to know
                            </Button>
                                </div>
                            </Grid>

                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="title" gutterBottom style={{ textAlign: 'center' }}>
                                    Brewing Glossary
                            </Typography>
                                <Typography variant="body1" gutterBottom style={{ overflowX: 'hidden' }}>
                                    Learn the terms of the trade so you don't sound like a total noob.
                            </Typography>
                                <Button variant="raised" style={{ margin: '20px 0' }}>
                                    Glossary
                            </Button>
                            </Grid>
                        </Grid>
                    </div>



                    <div className="contentWrap">

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12}>
                                <Typography variant="display1" gutterBottom style={{ textAlign: 'center', margin: '40px 0' }}>
                                    Display1
                            </Typography>
                                <Typography variant="subheading" gutterBottom>
                                    Subheading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Typography>

                            </Grid>
                        </Grid>
                    </div>
                    <div className="contentWrap">

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Button variant="raised" >
                                    Default
                            </Button>
                            </Grid>
                        </Grid>

                    </div>
            </MuiThemeProvider>

                );
            }
        }
