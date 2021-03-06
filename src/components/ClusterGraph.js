

import React, { Component } from 'react';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

import * as d3 from "d3";

import csv from '../test/nodes.csv';
import miserablesJSON from '../test/miserables.json';
import testo from '../test/test';



export default class ClusterGraph extends Component {

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

        // Code goes here

        document.querySelector("#cluster").innerHTML = "";
        
        var width = document.querySelector("#cluster").clientWidth,
            height = 800,
            padding = 1.5, // separation between same-color nodes
            clusterPadding = 16, // separation between different-color nodes
            maxRadius = 24;

        console.log(width);

        let sizeMultiplier = 1;

        if(width < 768){
            sizeMultiplier = 0.6;
        }

        console.log(width);


        var n = 100, // total number of nodes
            m = 20; // number of distinct clusters

        var color = d3.scale.category10()
            .domain(d3.range(m));

        // The largest node for each cluster.
        var clusters = new Array(m);
        var nodes = [];

        
        let data = [
            {"name":"JavaScript","size":"0.75","division":"js"},
            {"name":"ReactJS","size":"0.5","division":"js"},
            {"name":"Angular","size":"0.4","division":"js"},
            {"name":"Node","size":"0.5","division":"js"},
            {"name":"D3js","size":"0.5","division":"js"},
            {"name":"ES6","size":"0.5","division":"js"},
            {"name":"CSS","size":"0.75","division":"css"},
            {"name":"Animations","size":"0.5","division":"css"},
            {"name":"SASS","size":"0.5","division":"css"},
            {"name":"HTML","size":"0.75","division":"html"},
            {"name":"Templates","size":"0.5","division":"html"},
            {"name":"SVG","size":"0.5","division":"html"},
            {"name":"NPM","size":"0.75","division":"build"},
            {"name":"yarn","size":"0.3","division":"build"},
            {"name":"webpack","size":"0.4","division":"build"},
            {"name":"gulp","size":"0.4","division":"build"},
            {"name":"grunt","size":"0.4","division":"build"},
            {"name":"AWS","size":"0.75","division":"aws"},
            {"name":"S3","size":"0.6","division":"aws"},
            {"name":"Route53","size":"0.4","division":"aws"},
            {"name":"EC2","size":"0.4","division":"aws"},
            {"name":"IAM","size":"0.4","division":"aws"},
        ];
        


        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            for (var key in obj) {
                var rating = obj['size'] * sizeMultiplier;	// rating
                var r = rating * 100;		// radius
                var n = obj['name'];		// name
                var div = obj['division'];	// division
                
                var d = { 
                    cluster: div,
                    radius: r, 
                    name: n, 
                    division: div, 
                    rating: rating 
                };
                // d = {cluster: div, radius: r};
                // console.log(key+"="+obj[key]);
            }
            if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
            nodes.push(d);

            // console.log(d);
        }

        // Use the pack layout to initialize node positions.
        d3.layout.pack()
            .sort(null)
            .size([width, height])
            .children(function (d) { return d.values; })
            .value(function (d) { return d.radius * d.radius; })
            .nodes({
                values: d3.nest()
                    .key(function (d) { return d.cluster; })
                    .entries(nodes)
            });

        var force = d3.layout.force()
            .nodes(nodes)
            .size([width, height])
            .gravity(.03)
            .charge(0)
            .on("tick", tick)
            .start();


        var svg = d3.select("#cluster").append("svg")
            .attr("width", '100%')
            .attr("height", height);

        // console.log(nodes)

        var node = svg.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .style("fill", function (d) { return color(d.cluster); })
            .call(force.drag);

        var nodeText = svg.selectAll(".nodeText")
            .data(nodes)
            .enter().append("text")
            .text(function (d) {
                return d.name;
            })
            .attr("text-anchor", "middle")
            .style("fill", "white")
            
            // .style("stroke", "white")
            .call(force.drag);


        node.transition()
            .duration(750)
            .delay(function (d, i) { return i * 5; })
            .attrTween("r", function (d) {
                var i = d3.interpolate(0, d.radius);
                return function (t) { return d.radius = i(t); };
            });


        function tick(e) {
            node.each(cluster(10 * e.alpha * e.alpha))
                .each(collide(.5))
                .attr("transform", function (d) {
                    var k = "translate(" + d.x + "," + d.y + ")";
                    return k;
                });

            nodeText.each(cluster(10 * e.alpha * e.alpha))
                .each(collide(.5))
                .attr("transform", function (d) {
                    var k = "translate(" + d.x + "," + d.y + ")";
                    return k;
                });
        }


        // Move d to be adjacent to the cluster node.
        function cluster(alpha) {
            return function (d) {

                var cluster = clusters[d.index];

                if (cluster === d) return;
                var x = d.x - cluster.x,
                    y = d.y - cluster.y,
                    l = Math.sqrt(x * x + y * y),
                    r = d.radius + cluster.radius;
                if (l != r) {
                    l = (l - r) / l * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    cluster.x += x;
                    cluster.y += y;
                }
            };
        }

        // Resolves collisions between d and all other circles.
        function collide(alpha) {
            var quadtree = d3.geom.quadtree(nodes);
            return function (d) {
                var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
                    nx1 = d.x - r,
                    nx2 = d.x + r,
                    ny1 = d.y - r,
                    ny2 = d.y + r;
                quadtree.visit(function (quad, x1, y1, x2, y2) {
                    if (quad.point && (quad.point !== d)) {
                        var x = d.x - quad.point.x,
                            y = d.y - quad.point.y,
                            l = Math.sqrt(x * x + y * y),
                            r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
                        if (l < r) {
                            l = (l - r) / l * alpha;
                            d.x -= x *= l;
                            d.y -= y *= l;
                            quad.point.x += x;
                            quad.point.y += y;
                        }
                    }
                    return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                });
            };
        }





    }


    render() {
        return (
            <div id="cluster" style={{ display: 'flex',justifyContent: 'center' }}></div>
        );
    }


}
