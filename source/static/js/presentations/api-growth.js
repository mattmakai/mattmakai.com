function drawApiGrowth(data) {
/* API Growth chart created by miles driven chart */
var milesDrivenContainerWidth = $(".slides").width() *.9,
    milesDrivenContainerHeight = $(".slides").height() * .9; 

var margin = {top: 5, right: 5, bottom: 5, left: 5},
    milesDrivenWidth = milesDrivenContainerWidth,
    milesDrivenHeight = milesDrivenContainerHeight;

var maxDays = 12, maxMiles = 17000,
    lineWidth = milesDrivenWidth / maxDays;

var x = d3.scale.linear()    .domain([0, maxDays])
    .range([0, milesDrivenWidth]);

var y = d3.scale.linear()
    .domain([0, maxMiles])    .range([milesDrivenHeight, 0]);
var xAxis = d3.svg.axis()
    .scale(x)    .orient("bottom");
var yAxis = d3.svg.axis()
    .scale(y)    .orient("left");

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
    .call(yAxis);

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
            .style("stroke","#fff")
            .style("fill","#F9A31A")
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
            .delay(function(d, i) {return (i * 200) + 1000;})
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
            .style("fill","#406BB4")
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

