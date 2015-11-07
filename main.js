var menubar = require('menubar')

var mb             = menubar({
  // icon          : __dirname + '/IconTemplate.png',
  dir           : __dirname + '/app',
  preloadWindow : true, 
  resizable     : false
})

mb.on('ready', function ready () {
  console.log('app is ready')
  mb.window.loadUrl('file://' + __dirname + '/app/index.html');
  mb.app.commandLine.appendSwitch('remote-debugging-port', '8315');
  mb.app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
})