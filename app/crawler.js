var trend = require("github-trend-crawler");
var crawler = new trend.Crawler();
 
// Empty string means 'all languages'
window.onload=function(){
    crawler.fetchTrendRepos("", function(repos){
        var txt = "<div id='repo-list' class='ui relaxed divided list'>";
        repos.forEach(function(repo){
            var body = "<div class='repo-item item'><i class='large github middle aligned icon'></i><div class='content'><a class='header' href=";
            body +=  "'" + repo.link + "'";
            body += ">" + repo.name + "</a><div class='description'>" + repo.desc +"</div>";
            body += "</div></div>";
            txt += body;
        });
        txt += "</div>";
        document.getElementById('all').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
}; 
