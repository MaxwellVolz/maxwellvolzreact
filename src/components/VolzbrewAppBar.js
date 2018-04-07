import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../style/theme';

import Typography from 'material-ui/Typography';

import backgroundImage from '../imgs/milledGrains.jpg';

import logoSVG from '../imgs/logoNoTextW.svg';


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

            <AppBar position="fixed">
                <div style={styles.appBar}>

                    <Link to="/" style={styles.logo}>
                        <img style={styles.logoSVG} src={`${logoSVG}`} />
                    </Link>
                    {/* <Link to="/blog" style={styles.navBarOptions}>
                        <Button style={styles.buttonText}>
                            <div>Blog</div>
                        </Button>
                    </Link> */}
                    <Link to="/about" style={styles.navBarOptions}>
                        <Button style={styles.buttonText}>
                            <div>About</div>
                        </Button>
                    </Link>
                    <Link to="/brew" style={styles.navBarOptions}>
                        <Button style={styles.buttonText}>
                            Brew
                        </Button>
                    </Link>
                    <Link to="/" style={styles.navBarOptions}>
                        <Button style={styles.buttonText}>
                            Home
                        </Button>
                    </Link>
                    
                    
                   
                </div>
            </AppBar>

        );
    }
}
