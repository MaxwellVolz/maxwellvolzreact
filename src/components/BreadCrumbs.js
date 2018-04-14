import React, { PureComponent, Component } from 'react';

import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../style/theme';

export default class BreadCrumbs extends PureComponent<PropType> {
    render() {
        return (
            <span>
                {this.props.breadCrumbs.map((item, index) =>
                    <Link to={item.url} key={index} style={{color:'grey'}}>
                    
                        {item.name}

                        {(this.props.breadCrumbs.length-1 == index ? '' : <span className="breadCrumbArrows"> >> </span>)}
                    </Link>
                    
                )
                }
            </span>

        );
    }
}
