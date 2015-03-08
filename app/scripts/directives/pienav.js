angular.module('djcomAngularApp')
    .directive('pieNav', function() {
        function link(scope, el) {

            var el = el[0],
                width = parseInt($('main').css('width')),
                height = Math.min(width, 600),
                radius = Math.min(width, height) / 2;

            var svg = d3.select(el).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.percent; });

            var data = scope.data;

            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("a")
                .attr("xlink:href", function(d){
                    return d.data.url;})
                .append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .attr("id", function(d) { return d.data.id; })
                .style("stroke", "white");

            g.append("text")
                .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .style("fill", "white")
                .text(function(d) { return d.data.id; });

        }
        return {
            link: link,
            restrict: 'E',
            replace: false,
            scope: { data: '='}
        }
    })
