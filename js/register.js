if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/js/sw.js')
	.then( () => {
		console.log('Servie worker registration succeed...');
	})
	.catch( () => {
		console.log('Registration failed...');
	});
}