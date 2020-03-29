module.exports = {
	apiEndpoint: 'https://sekaicouk.cdn.prismic.io/api/v2',
	linkResolver: function(doc, ctx) {
		if (doc.type == 'post') {
			return '/post/' + doc.uid;
		}

		return '/';
	},
};
