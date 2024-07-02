const Service = require('node-windows').Service;

const svc = new Service({
    name: 'My Node.js App',
    description: 'My Node.js app as a Windows service.',
    script: 'C:\Users\sistemas.DESKTOP-NO27NDH\Desktop\IFCD0210\Curso-Web-2\Node\service\index.js'
  });
  svc.on('install', () => {
    svc.start();
  });
  svc.install();
