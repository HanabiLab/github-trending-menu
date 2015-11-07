var Trending = require("github-trend");
var scraper = new Trending.Scraper();
 
// Empty string means 'all languages'
window.onload=function(){
    scraper.scrapeTrendingRepos("").then(function(repos){
        var txt = "<div id='repo-list'>";
        repos.forEach(function(repo){
            txt += "<div class='repo-item'>" + repo.owner + '/' + repo.name + '</div>' + '<br />';
        });
        txt += "</div>"
        document.getElementById('result').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
}; 
