const { ChakraLoaderPlugin } = require('chakra-loader')

module.exports = {
	configureWebpack: {
		plugins: [
			new ChakraLoaderPlugin()
		]
	},
	transpileDependencies: ['vuex-persist']
}
