

import React, { Component } from 'react';



export default class ReactiveSVG extends Component {

    constructor(props) {
        super(props)

        this.createGalaxy = this.createGalaxy.bind(this);
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        this.createGalaxy();
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    componentDidUpdate() {
        this.createGalaxy();
    }

    createGalaxy() {
        
    }



    render() {
        


        return (
            <div>hey</div>
        );
    }


}
