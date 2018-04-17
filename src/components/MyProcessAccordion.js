import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../style/theme';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';


import ExpandMoreIcon from '../components/ExpandMoreIcon';




const styles = {
    appBar: {
        paddingRight: 17,
    },
    buttonText: {
        color: 'white',
        textDecoration: 'none',
    },
    logo: {
        float:'left'
    },
    navBarOptions: {
        float:'right'
    },
    logoSVG:{
        marginTop: '4px',
        marginLeft:'4px',
        height: 28
    }
    
};

export default class VolzbrewAppBar extends PureComponent<PropType> {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            

                <Grid container spacing={0} justify="center" style={{ flexGrow: '1', marginTop: '40px' }}>
                        <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Concept</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Pencil and paper. If the layout is simple, I'll leave the concept at that and come back to it when I'm ready to write some HTML and CSS.
                                Otherwise, I'll sketch the layout in Illustrator and work out the responsive aspects.
                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Starting the Project</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Open Visual Studio Code. Make a git repo. <a link="https://github.com/facebook/create-react-app">Create-react-app</a>. Install dependencies with npm or yarn. 
                                <br/>
                                <br/>
                                <Link to="https://code.visualstudio.com/">
                                    <Button variant="raised">
                                        Visual Studio Code
                                    </Button>
                                </Link>
                                <Link to="https://git-scm.com/downloads">
                                    <Button variant="raised">
                                        Git
                                    </Button>
                                </Link>
                                <Link to="https://nodejs.org/en/">
                                    <Button variant="raised">
                                        NPM
                                    </Button>
                                </Link>
                                <Link to="https://yarnpkg.com/en/">
                                    <Button variant="raised">
                                        Yarn
                                    </Button>
                                </Link>
                                

                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Components &amp; Style</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                MaterialUI for beautiful and familiar Web UI elements. Additional styling is done in .jsx or with minimal CSS. Flex!
                                <br/>
                                <br/>
                                <Link to="https://material-ui-next.com/">
                                    <Button variant="raised">
                                        MaterialUI
                                    </Button>
                                </Link>

                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>


                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Code Testing</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Unit Tests are run using Jest, a node-based test runner. End-to-End testing with Cypress or TestCafe coming soon!
                                <br/>
                                <br/>
                                <Link to="https://facebook.github.io/jest/">
                                    <Button variant="raised">
                                    Jest
                                    </Button>
                                </Link>

                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Build &amp; Delivery</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography>
                                Create-React-App provides awesome minification and optimizing for production environments. Pushing to production is made easy with AWS Command Line, S3 Buckets, and Route53.
                                <br/>
                                <br/>
                                <Link to="https://aws.amazon.com/">
                                    <Button variant="raised">
                                        AWS
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
            </MuiThemeProvider>
        );
    }
}
