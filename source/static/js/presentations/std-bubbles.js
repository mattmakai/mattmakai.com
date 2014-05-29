function drawBubblesChart(data) {

    var alreadyDrawn = $('#bubbles-svg').children().length;

    if (!alreadyDrawn) {

        var containerName = "#bubbles-viz",
            format = d3.format(",d"),
            color = d3.scale.category20c();

        var containerWidth = $(".slides").width(),
            containerHeight = $(".slides").height();

        var margin = {top: 5, right: 5, bottom: 5, left: 5},
            vizWidth = containerWidth,
            vizHeight = containerHeight - 150;

        var svg = d3.select("#bubbles-svg")
            .append("g")        
                .attr("transform", "translate(" + margin.left + "," + 
                    margin.top + ")");

        var bubble = d3.layout.pack()
            .sort(null)
            .size([vizWidth, vizHeight])
            .padding(1.5);

        d3.json("/static/data/bubbles.json", function(error, root) {
          var node = svg.selectAll(".node")
              .data(bubble.nodes(classes(root))
              .filter(function(d) { return !d.children; }))
            .enter().append("g")
              .attr("class", "node")
              .attr("transform", 
                function(d) { return "translate(" + d.x + "," + d.y + ")"; });


          node.append("title")
              .text(function(d) { return d.className + ": " + format(d.value); });

          node.append("circle")
              .attr("r", function(d) { return 0; })
              .style("fill", function(d) { return color(d.packageName); })
            .transition()
                .attr("r", function(d, i) {
                        return d.r;
                    })
                .delay(function(d, i) {return (i * 50) + 100;})
                .duration(1000);
        });
            
        // Returns a flattened hierarchy containing all leaf nodes under the root.
        function classes(root) {
          var classes = [];

          function recurse(name, node) {
            if (node.children) node.children.forEach(
                function(child) { recurse(node.name, child); });
            else classes.push({
                packageName: name, className: node.name, value: node.size
            });
          }

          recurse(null, root);
          return {children: classes};
        }

        d3.select(self.frameElement).style("height", vizHeight + "px");
    }
}

