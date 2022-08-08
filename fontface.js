// const fs = require('fs-extra');
const fs = require('fs');
const path = require('path');
const fontfacegen = require('@pxem/fontfacegen');

const source = './src/fonts/input';
const fonts = fs.readdirSync(source);
const processedFolder = './src/fonts/';
const processedFiles = fs.readdirSync(processedFolder);
const dest = './src/fonts/';
const cssfile = './src/css/base/fonts.css';
const extensions = ['.ttf', '.woff', '.woff2', '.eot'];

processedFiles.forEach((file) => {
  if (!extensions.includes(path.extname(file))) {
    return;
  }
  fs.unlinkSync(processedFolder + '/' + file);
  // console.log(file);
});

if (fs.existsSync(cssfile)) {
  fs.unlinkSync(cssfile);
}

// eslint-disable-next-line no-plusplus
for (let i = fonts.length - 1; i >= 0; i--) {
  const font = fonts[i];
  const extension = path.extname(font);
  // const fontname = path.basename(font, extension);

  // Test with embedded ttf
  if (extension === '.ttf' || extension === '.otf') {
    fontfacegen({
      source: path.join(source, font),
      dest,
      collate: false,
      css: './src/css/base/fonts.css',
      css_fontpath: '../../fonts/',
    });
  }
}