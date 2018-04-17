import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';



import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';
  
import ExpandMoreIcon from './../../components/ExpandMoreIcon';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';

import copyHackerCode from './../../imgs/svgs/copyCode.svg';
import debugVS from './../../imgs/svgs/debug.svg';





// import backgroundImage from '../../imgs/milledGrains.jpg';

const styles = {
    headerGrid: {
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed', //optional
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '340px'
    },
    mainHeaderText: {
        paddingTop: '140px',
        textAlign: 'center',
        // color: 'white'
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
            <ScrollToTopOnMount/>
            


                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 0 }}>
                    <Grid item xs={12} style={styles.headerGrid}>
                        <Typography variant="display2" style={styles.mainHeaderText}>
                            HackerRank Local Development and Solutions
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

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: 40, marginBottom: 40 }}>
                        <Grid item xs={12}>

                            <Typography variant="headline" gutterBottom>
                                {/* Volzbrew is dedicated to teaching an affordable way to brew at home. */}
                                <Link to="https://www.hackerrank.com/dashboard" style={{textDecoration:'underline'}}>HackerRank.com</Link> is a website for testing your ability to solve programming algorithms.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div className="colorWrap">

                    <div className="contentWrap">

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Link to="https://github.com/MaxwellVolz/hackerranklocal">

                                    <Button variant="raised">
                                        Skip to the Solutions
                                    </Button>
                                </Link>

                            </Grid>
                        </Grid>
                    </div>

                </div>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Typography variant="headline" gutterBottom>
                                Let's set up a quick local dev environment so we can practice when the internet goes down!
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                Also it's ~1000% faster for testing your code.
                            </Typography>

                        </Grid>
                    </Grid>

                </div>
                <div className="colorWrap">

                    <div className="contentWrap">

                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Typography variant="headline" gutterBottom>
                                    Check Dependencies
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                </div>
                <div style={styles.contentWrap}>

                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Node >8.11 and NPM >5.6</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Check what you have with <code>node -v</code> and <code>npm -v</code>. You could probably get by with slightly older versions. 
                                <br/>
                                <br/>
                                <Link to="https://nodejs.org/en/">

                                    <Button variant="raised">
                                        Download Latest
                                    </Button>
                                </Link>


                                
                                
                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Visual Studio Code <sup>optional</sup></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                My current favorite IDE. The Debugger and Integrated Shell are great for increasing productivity!
                                <br/>
                                <br/>
                                <Link to="https://code.visualstudio.com/">
                                    <Button variant="raised">
                                        Download
                                    </Button>
                                </Link>

                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Gulp <sup>optional</sup></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Taskrunner of choice for automating running of code. Simple, lightweight, and fits our needs for this project. Definitely optional.
                                <br/>
                                <br/>
                                <Link to="https://gulpjs.com/">
                                    <Button variant="raised">
                                        Download
                                    </Button>
                                </Link>

                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        {/* <ExpansionPanel disabled>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Disabled Expansion Panel</Typography>
                            </ExpansionPanelSummary>
                        </ExpansionPanel> */}

                        </Grid>
                    </Grid>

                </div>

                <div className="colorWrap">
                    <div className="contentWrap">
                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Typography variant="headline" gutterBottom>
                                    Run a Local Test
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Link to="https://gulpjs.com/">
                                    <Button variant="raised">
                                        Open First Warmup Test on HackerRank
                                    </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>

                <div className="colorWrap">
                    <div className="contentWrap">
                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Typography variant="headline" gutterBottom>
                                   Copy everything from the code editor on HackerRank.com and save as a ".js" file in Visual Studio Code.
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>

                
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <img src={copyHackerCode} alt="copyHackerCode" />
                            
                        </Grid>
                    </Grid>
                </div>
                

                
                    <div className="contentWrap">
                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Typography variant="headline" gutterBottom>
                                   Run the code with <pre><code>node ./solveMeFirst.js</code></pre> and notice how it just sits there...
                                </Typography>
                                <Typography variant="caption" gutterBottom>
                                Ctrl-C will kill the current process
                            </Typography>
                            </Grid>
                        </Grid>
                    </div>

<div className="colorWrap">
                <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Typography variant="headline" gutterBottom>
                                Add the following lines to the end of your script to include the sample input and trigger main():
                                <pre><code>
                                process.stdin.emit('data', "6"); 
                                <br/>
                                process.stdin.emit('data', "\n");
                                <br/>
                                process.stdin.emit('data', "1 2 3 4 10 11");
                                <br/>
                                process.stdin.emit('end');
                                </code></pre>                            
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                </div>

               

                    <div className="contentWrap">
                        <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                            <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <Typography variant="headline" gutterBottom>
                                Execute <pre><node>node ./solveMeFirst.js</node></pre> and notice how <em>quickly</em> it runs...
                                   
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                
                <div className="colorWrap">

                <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Typography variant="headline" gutterBottom>
                            
                                In Visual Studio Code, add a breakpoint after: <pre><code>var res = solveMeFirst(a, b);</code></pre>Run the Debugger and hover over <b>res</b>.
                            </Typography>
                        
                                <img src={debugVS} alt="debugVS" />

                            </Grid>
                        </Grid>
                    </div>
                </div>

                <div className="contentWrap">
                    <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <Typography variant="headline" gutterBottom>
                                Or add this to the last line of main(): <pre><code>console.log("res: " + res);</code></pre>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div className="colorWrap">

            <div className="contentWrap">
                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                    <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <Typography variant="headline" gutterBottom>
                        
                            Now you can quickly compile code on your local machine and test away!
                        </Typography>
                        <Link to="https://github.com/MaxwellVolz/hackerranklocal">

                            <Button variant="raised">
                                View Solutions
                            </Button>
                        </Link>
                    
                          

                        </Grid>
                    </Grid>
                </div>
            </div>

                

                
            </MuiThemeProvider>

        );
    }
}
