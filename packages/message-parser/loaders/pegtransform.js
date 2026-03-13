const peggy = require('peggy');

module.exports = {
	process: (content) => ({
		code: peggy.generate(content, {
			output: 'source',
			format: 'commonjs',
		}),
	}),
};
