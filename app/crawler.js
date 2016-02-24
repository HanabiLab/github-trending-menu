var trend = require("github-trend-crawler");
var crawler = new trend.Crawler();
 
// Empty string means 'all languages'
window.onload=function(){
    crawler.fetchTrendRepos("", function(repos){
        var txt = "<div id='repo-list' class='ui segments'>";
        repos.forEach(function(repo){
            var link = repo.link
            txt += "<div class='repo-item ui raised segment'>" + "<a href=" + "'" + link + "'" + "><span style='font-weight: bold'>" +repo.name + "</span></a>" + "</div>";
        });
        txt += "</div>"
        document.getElementById('result').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
}; 
