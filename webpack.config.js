const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/chatWidget.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chat-widget.js',
    library: 'ChatWidget',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
};