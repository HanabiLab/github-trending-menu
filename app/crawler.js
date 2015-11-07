var Trending = require("github-trend");
var scraper = new Trending.Scraper();
 
// Empty string means 'all languages'
window.onload=function(){
    scraper.scrapeTrendingRepos("").then(function(repos){
        var txt = "<div id='repo-list'>";
        repos.forEach(function(repo){
            var link = "https://github.com/" + repo.owner + "/" + repo.name
            txt += "<a href=" + "'" + link + "'" + "><div class='repo-item ui red segment'>" + repo.owner + "/" + "<span style='font-weight: bold'>" +repo.name + "</span>" + "</div></a>" + "<br />";
        });
        txt += "</div>"
        document.getElementById('result').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
}; 
