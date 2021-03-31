export default {
	generate: {
		dir: 'docs'
	},

	components: true,
	
	head: {
		title: 'Ronak@IIHGlobal',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
			rel: 'stylesheet',
			href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
			}
		]
	}


}