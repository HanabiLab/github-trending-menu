var trend = require("github-trend-crawler");
var crawler = new trend.Crawler();

window.$ = window.jQuery = require('jquery');
 
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
        $('#all').attr('class', 'ui bottom attached tab segment active');
        document.getElementById('all').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
};

$('#alltab').click(function(){
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
        $('#all').attr('class', 'ui bottom attached tab segment active');
        document.getElementById('all').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
});

$('#pytab').click(function(){
    crawler.fetchTrendRepos("python", function(repos){
        var txt = "<div id='repo-list' class='ui relaxed divided list'>";
        repos.forEach(function(repo){
            var body = "<div class='repo-item item'><i class='large github middle aligned icon'></i><div class='content'><a class='header' href=";
            body +=  "'" + repo.link + "'";
            body += ">" + repo.name + "</a><div class='description'>" + repo.desc +"</div>";
            body += "</div></div>";
            txt += body;
        });
        txt += "</div>";
        $('#py').attr('class', 'ui bottom attached tab segment active');
        document.getElementById('py').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
});

$('#jstab').click(function(){
    crawler.fetchTrendRepos("javascript", function(repos){
        var txt = "<div id='repo-list' class='ui relaxed divided list'>";
        repos.forEach(function(repo){
            var body = "<div class='repo-item item'><i class='large github middle aligned icon'></i><div class='content'><a class='header' href=";
            body +=  "'" + repo.link + "'";
            body += ">" + repo.name + "</a><div class='description'>" + repo.desc +"</div>";
            body += "</div></div>";
            txt += body;
        });
        txt += "</div>";
        $('#js').attr('class', 'ui bottom attached tab segment active');
        document.getElementById('js').innerHTML = txt;
    }).catch(function(err){
        console.log(err.message);
    });
});