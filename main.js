const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');
const cors = require('cors');

const expressApp = express();
expressApp.set('port', process.env.PORT || 3000);

// Sử dụng middleware cors để cho phép tất cả các origin truy cập vào máy chủ
expressApp.use(cors());

expressApp.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

const server = expressApp.listen(expressApp.get('port'), () => {
  console.log(`Server started at http://localhost:${server.address().port}`);
});

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(`http://localhost:${server.address().port}`);
});
