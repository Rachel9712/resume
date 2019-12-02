var currentSelected;
var t = 750;
d3.selectAll("div")
    .on("mouseover",function(d){
        if(currentSelected != this.id)
        {
            d3.selectAll("div")
                .transition().duration(t)
                .style("opacity","1")
                .style("color","rgb(175,175,175)");
                //.style("background-color","white");
            d3.select('#'+this.id)
                .transition().duration(t)
                .style("opacity","1")
                .style("color","black");
                //.style("background-color","rgb(200,200,200)");
            // channelSplit(this);
            console.log(this.id);
            currentSelected = this.id;
        }
    })
    .on('click',function(d){
        d3.selectAll("div")
                .transition().duration(t)
                .style("opacity","0");
        d3.select('#'+this.id)
            .transition().duration(t)
            .style("opacity","1");
    });
d3.select("#photo")
    .on("mouseover",function(d){
        d3.selectAll("div")
            .transition().duration(t)
                .style("opacity","1")
                .style("color","rgb(255,0,0)")
                .transition().duration(t)
                .style("opacity","1")
                .style("color","rgb(0,255,0)")
                .transition().duration(t)
                .style("opacity","1")
                .style("color","rgb(0,0,255)")
                .transition().duration(t)
                .style("opacity","0");
    });