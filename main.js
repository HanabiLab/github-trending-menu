var menubar = require('menubar')

var mb             = menubar({
  icon          : __dirname + '/Icon.png',
  dir           : __dirname + '/app',
  preloadWindow : true, 
  resizable     : false
})

mb.on('ready', function ready () {
  console.log('app is ready')
  mb.window.loadUrl('file://' + __dirname + '/app/index.html');
})