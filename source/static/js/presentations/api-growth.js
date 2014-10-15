function drawApiGrowth(data) {
/* API Growth chart created by miles driven chart */
var milesDrivenContainerWidth = $(".slides").width() *.9,
    milesDrivenContainerHeight = $(".slides").height() * .9; 

var margin = {top: 5, right: 5, bottom: 5, left: 65},
    milesDrivenWidth = milesDrivenContainerWidth,
    milesDrivenHeight = milesDrivenContainerHeight;

var numLines = 11, maxMiles = 17000,
    lineWidth = milesDrivenWidth / numLines;

var x = d3.scale.linear().domain([0, numLines])
    .range([0, milesDrivenWidth]);

var xAxisRange = d3.scale.linear().domain([2005, 2015])
    .range([0, milesDrivenWidth]);

var y = d3.scale.linear()
    .domain([0, maxMiles])    .range([milesDrivenHeight, 0]);
var xAxis = d3.svg.axis()
    .scale(xAxisRange).orient("bottom").tickFormat(d3.format("0f"));
var yAxis = d3.svg.axis()
                .scale(y)    
                .orient("left").tickFormat(function(d, i) {
                    if(d > 9999) {
                        return (d + "").substring(0, 2) + "k";
                     } else if (d > 0) {
                        return (d + "").substring(0, 1) + "k";
                     }
                     return ""; });

var svg = d3.select("svg#api-growth-svg")
            .append("g")        
            .attr("transform", "translate(" + margin.left + "," + 
            margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + milesDrivenHeight + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Public Web APIs");

    var totalTooltip = d3.select("body")
        .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .attr("class", "total-miles-tooltip")
            .text(function(d) {return "";});
    
    var byDayTooltip = d3.select("body")
        .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .attr("class", "miles-driven-tooltip")
            .text(function(d) {return "";});

    var total_bars = svg.selectAll("rect.total-miles")
        .data(data.driving)
            .enter()
        .append("rect")
            .attr("x", function(d) {return x(d.day) - lineWidth;})
            .attr("y", function(d) {return milesDrivenHeight;})
            .attr("width",lineWidth)
            .attr("class", "total-miles")
            .attr("height", function(d) {return 0;})
            .attr("title", function(d) {return d.date;})
            .style("stroke","#222")
            .style("fill","#ff0000")
            .on("mouseover", function(d, i) {
                var tipMsg = d.total + " total APIs available";
                return totalTooltip.style("visibility", "visible")
                    .text(tipMsg);
            })
            .on("mousemove", function(d, i) {
                return totalTooltip.style("top", 
                    (event.pageY-10)+"px").style("left",
                    (event.pageX+10)+"px");
            })
            .on("mouseout", function(d, i) {
                return totalTooltip.style("visibility", "hidden");
            })
        .transition()
            .attr("y", function(d) {return y(d.total);})
            .attr("height", function(d) {
                    return milesDrivenHeight - y(d.total);
                })
            .delay(function(d, i) {return (i * 200) + 8000;})
            .duration(1200);

    var bars = svg.selectAll("rect.daily-miles")
        .data(data.driving)
            .enter()
        .append("rect")
            .attr("x", function(d) {return x(d.day) - lineWidth;})
            .attr("y", function(d) {return milesDrivenHeight;})
            .attr("class", "daily-miles")
            .attr("width",lineWidth)
            .attr("height", function(d) {return 0;})
            .style("stroke","#fff")
            .style("fill","#222")
            .on("mouseover", function(d, i) {
                var tipMsg = d.miles + " APIs added this year";
                return byDayTooltip.style("visibility", "visible")
                    .text(tipMsg);
            })
            .on("mousemove", function(d, i) {
                return byDayTooltip.style("top", 
                    (event.pageY-10)+"px").style("left",
                    (event.pageX+10)+"px");
            })
            .on("mouseout", function(d, i) {
                return byDayTooltip.style("visibility", "hidden");
            })
        .transition()
            .attr("y", function(d) {return y(d.miles);})
            .attr("height", function(d) {
                    return milesDrivenHeight - y(d.miles);
                })
            .delay(function(d, i) {return (i * 50) + 100;})
            .duration(1200);

}

