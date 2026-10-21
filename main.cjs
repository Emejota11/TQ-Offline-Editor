const {app,BrowserWindow,dialog,screen}=require('electron');
const path=require('node:path');
let mainWindow;
const locked=app.requestSingleInstanceLock();
if(!locked){app.quit();}else{
app.setAppUserModelId('com.emejota11.tqofflineeditor');
app.on('second-instance',()=>{if(mainWindow){if(mainWindow.isMinimized())mainWindow.restore();mainWindow.focus();}});
app.whenReady().then(()=>{
 const area=screen.getPrimaryDisplay().workAreaSize;
 mainWindow=new BrowserWindow({title:'TQ Offline Editor v1',width:836,height:Math.min(820,area.height-30),minWidth:640,minHeight:480,useContentSize:true,show:false,autoHideMenuBar:true,backgroundColor:'#15170f',icon:path.join(__dirname,'assets/icon.png'),webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,webSecurity:true,devTools:!app.isPackaged}});
 mainWindow.removeMenu();
 mainWindow.webContents.setWindowOpenHandler(()=>({action:'deny'}));
 mainWindow.webContents.on('will-navigate',event=>event.preventDefault());
 mainWindow.webContents.session.setPermissionRequestHandler((_webContents,_permission,callback)=>callback(false));
 mainWindow.webContents.session.webRequest.onBeforeRequest({urls:['http://*/*','https://*/*']},(_details,callback)=>callback({cancel:true}));
 mainWindow.webContents.session.on('will-download',(_event,item)=>{
  item.setSaveDialogOptions({title:'Guardar archivo de personaje',defaultPath:path.join(app.getPath('downloads'),item.getFilename()),filters:[{name:'Partida de Titan Quest',extensions:['chr']}],properties:['showOverwriteConfirmation']});
  item.once('done',(_event,state)=>{if(state==='interrupted'&&mainWindow&&!mainWindow.isDestroyed())dialog.showMessageBox(mainWindow,{type:'error',title:'No se pudo guardar',message:'La descarga se interrumpió. Vuelve a guardar el archivo antes de cerrar el editor.'});});
 });
 mainWindow.webContents.once('did-finish-load',async()=>{
  try{const height=await mainWindow.webContents.executeJavaScript('Math.ceil(document.querySelector(".editor").getBoundingClientRect().height)');mainWindow.setContentSize(820,Math.min(Math.max(height,480),area.height-60));mainWindow.center();}catch{}
  mainWindow.show();
 });
 mainWindow.loadFile(path.join(__dirname,'app/index.html')).catch(error=>{dialog.showErrorBox('No se pudo abrir el editor',error.message);app.quit();});
 mainWindow.on('closed',()=>{mainWindow=null;});
});
app.on('window-all-closed',()=>app.quit());
}
