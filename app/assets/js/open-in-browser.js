var shell = require('shell');
var $ = require("jquery");

$(document).on('click', 'a[href^="http"]', function(event) {
  event.preventDefault();
  shell.openExternal(this.href);
});