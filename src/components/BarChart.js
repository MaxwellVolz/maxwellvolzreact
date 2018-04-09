import React, { Component } from 'react';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

import * as d3 from "d3";


export default class BarChart extends Component {

    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this);
    }

    componentDidMount() {
        this.createBarChart()
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {

        var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height"),
            angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

        var path = svg.append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
            .attr("fill", "none")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .selectAll("path")
            .data(["cyan", "magenta", "yellow"])
            .enter().append("path")
            .attr("stroke", function (d) { return d; })
            .style("mix-blend-mode", "darken")
            .datum(function (d, i) {
                return d3.radialLine()
                    .curve(d3.curveLinearClosed)
                    // .curve(d3.curveStep)
                    
                    // .curve(d3.curveCatmullRom.alpha(0.5))
                    
                    .angle(function (a) { return a; })
                    .radius(function (a) {
                        var t = d3.now() / 1000;
                        return 100 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
                    });
            });

        d3.timer(function () {
            path.attr("d", function (d) {
                return d(angles);
            });
        });



    }

    render() {
        return <svg ref={node => this.node = node}
            width={500} height={500}>
        </svg>
    }


}
