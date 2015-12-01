var trend = require("github_trending_node");
var crawler = new trend.Crawler();
 
// Empty string means 'all languages'
window.onload=function(){
    crawler.fetchTrendRepos("").then(function(repos){
        var txt = "<div id='repo-list' class='ui segments'>";
        repos.forEach(function(repo){
            var link = "https://github.com/" + repo.owner + "/" + repo.name
            txt += "<div class='repo-item ui raised segment'>" + repo.owner + "/" + "<a href=" + "'" + link + "'" + "><span style='font-weight: bold'>" +repo.name + "</span></a>" + "</div>";
        });
        txt += "</div>"
        document.getElementById('result').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
}; 
