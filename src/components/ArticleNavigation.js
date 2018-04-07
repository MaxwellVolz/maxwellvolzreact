import React, { PureComponent, Component } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../style/theme';

import List, { ListItem, ListItemText } from 'material-ui/List';


export default class ArticleNavigation extends PureComponent<PropType> {
    render() {
        return (
            <List component="nav">

                {this.props.navOptions.map((item,index) =>

                    <Link to={item.url} key={index}>

                        <ListItem button className={(item.isActive ? 'navActive' : '')}>

                            <ListItemText primary={item.name} />
                            
                        </ListItem>
                    </Link>
                )
                }
            </List>

        );
    }
}
