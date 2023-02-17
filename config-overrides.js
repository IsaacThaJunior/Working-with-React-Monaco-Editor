const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');




// module.exports = function override(config, env) {
// 	config.plugins.push(
// 		new MonacoWebpackPlugin({
// 			languages: ['javascript', 'typescript', 'css', 'html', 'json'],
// 		})
// 	);
// 	return config;
// };


module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin())
  return config;
}