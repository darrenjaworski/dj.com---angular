angular.module('djcomAngularApp')
    .directive('donutChart', function() {
        function link(scope, el) {

            var el = el[0],
                m = 10,
                r = 120,
                color = d3.scale.category20c();

            var arc = d3.svg.arc()
                .outerRadius(r)
                .innerRadius(r / 2);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d[1]; });

            var data = scope.data;

            var frameworks = data.frameworks;

            var svg = d3.select(el).append("div")
                .style("display", "inline-block")
                .style("width", (r + m) * 2 + "px")
                .style("height", (r + m) * 2 + "px")
                .append("svg")
                .attr("width", (r + m) * 2)
                .attr("height", (r + m) * 2)
                .append("g")
                .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")");

            svg.append("text")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .style("font-size", "20px")
                .style("font-weight", "bold")
                .text(function() { return data.language; });

            var g = svg.selectAll("g")
                .data(pie(frameworks))
                .enter()
                .append("g");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.data[0]); });

            g.filter(function(d) { return d.endAngle - d.startAngle > .2; }).append("text")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")"; })
                .text(function(d) {
                    console.log(d.data[0]);
                    return d.data[0]; });

                function angle(d) {
                    var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
                    return a > 90 ? a - 180 : a;
                }

        }
        return {
            link: link,
            restrict: 'E',
            replace: false,
            scope: { data: '='}
        }
    })
