var menubar = require('menubar')

var mb = menubar({
  icon          : __dirname + '/Icon.png',
  dir           : __dirname + '/app',
  preloadWindow : true, 
  resizable     : false,
  width         : 300,
  height        : 500,
})

mb.on('ready', function ready () {
  console.log('app is ready')
  mb.window.loadUrl('file://' + __dirname + '/app/index.html');
})