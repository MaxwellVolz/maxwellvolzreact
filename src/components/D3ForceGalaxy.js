

import React, { Component } from 'react';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

import * as d3 from "d3";

import csv from '../test/nodes.csv';
import miserablesJSON from '../test/miserables.json';
import testo from '../test/test';



export default class BarChart extends Component {

    constructor(props) {
        super(props)

        this.createGalaxy = this.createGalaxy.bind(this);
    }

    componentDidMount() {
        this.createGalaxy();
    }

    componentDidUpdate() {
        this.createGalaxy();
    }

    createGalaxy() {

        var svg = d3.select("svg"),
            width = +svg.attr("width"),
            height = +svg.attr("height");

        var color = d3.scaleOrdinal()
            .domain([0,1,2])
            .range(['black', '#ccc', '#ccc']);

        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));


        
        // miserablesJSON.parse(function(error,graph){
        let graph = miserablesJSON;
        console.log(graph);
            
        // d3.json('miserables.json', function(error, graph) {

        
        // if (error) throw error;

        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter()

            .append("circle")
            // .attr("width",10)
            // .attr("height",5)
            .attr("r", 5)
            .attr("fill", function(d) { 
                return color(d.group); 
            })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("title")
            .text(function(d) { return d.id; });

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
        }
        // });

        function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        }

        function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
        }

        function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        }

    }


    render() {
        return (
            <svg width="800" height="360">
                <g id="wrapper" transform="translate(100, 40)">
                </g>
            </svg>
        );
    }


}
