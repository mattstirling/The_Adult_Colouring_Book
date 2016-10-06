/**
 * 
 */
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>D3 Pie</title>
 <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css" rel="stylesheet" data-semver="3.0.1" data-require="normalize@*" />
</head>
<body>
<div id="chart"></div>
<script data-require="d3@*" data-semver="4.0.0" src="https://d3js.org/d3.v4.min.js"></script>
<script>
(function(d3) {
'use strict';
var dataset = [
{ label: 'Abulia', count: 1 }, 
{ label: 'Betelgeuse', count: 2 },
{ label: 'Cantaloupe', count: 3 },
{ label: 'Dijkstra', count: 40 }
        ];
var width = 360;
var height =360;
var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal(d3.schemeCategory20b);
var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) + 
            ',' + (height / 2) + ')');
var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
var pie = d3.pie()
          .value(function(d) { return d.count; })
          .sort(null);
var path = svg.selectAll('path')
          .data(pie(dataset))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr('fill', function(d, i) { 
            return color(d.data.label);
});
})(window.d3);
</script>
</body>
</html>
