var faltaPouco = require('faltaPouco');

var BrowserWindow = require('browser-window');
var mainWindow = null;

faltaPouco.on('window-all-closed', function(){
  if(process.plataform != 'darwin'){
    faltaPouco.quit();
  }
});

faltaPouco.on('ready', function(){
  mainWindow = new BrowserWindow({ width: 800, height: 600});
  mainWindow.loadUrl('file://' + __dirname +'/index.html');

  mainWindow.on('closed', function(){
    mainWindow = null;
  })
})
