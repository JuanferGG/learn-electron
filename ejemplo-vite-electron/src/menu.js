import { app, Menu } from "electron";

const isMac = process.platform === 'darwin'

export const setMainMEnu = (mainWindow) => {
  const template = [
    {
      label: "Opciones",
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideOthers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      label: 'Themes',
      submenu: [
        { 
          label: 'light',
          click: () => {
            mainWindow.webContents.send('theme', 'light')
          }
        },
        { 
          label: 'Dark',
          click: () => {
            mainWindow.webContents.send('theme', 'dark')
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
