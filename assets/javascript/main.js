var search;
var yStart;
var yEnd;
var records;

var testURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +search +"&api-key=578db0069dee4d3da3c016b814ff57a6";

$.ajax({
    url: testURL,
    method: "GET"
}).then(function(response){
    console.log(response);
});